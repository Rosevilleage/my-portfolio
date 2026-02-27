# 당첨?당첨! — 실시간 멀티플레이 랜덤 뽑기

## 프로젝트 개요

친구나 팀원과 함께 실시간으로 랜덤 뽑기를 할 수 있는 웹 애플리케이션입니다.
방장이 방을 생성하고, 참가자가 QR 코드 또는 링크로 입장한 뒤 모두 준비 완료 시 뽑기를 실행합니다.
Socket.IO 기반 백엔드와 실시간으로 연동되어, 결과가 모든 참가자에게 동시에 전달됩니다.

## 기술 스택

- **Next.js 16 (App Router)**: 파일 기반 라우팅, Metadata API, dynamic 코드 스플리팅
- **TypeScript (strict)**: WebSocket 페이로드 타입 강제, 컴파일 타임 오타 검출
- **Tailwind CSS 4**: 유틸리티 기반 반응형 UI
- **Zustand 5**: 경량 전역 스토어, WebSocket 이벤트 → 스토어 업데이트 패턴
- **Socket.IO Client 4**: WebSocket 자동 재연결, `withCredentials`로 방장 인증 쿠키 전달
- **Motion, GSAP 3**: 카드 모임·플립 애니메이션, 텍스트 셔플 효과
- **TanStack Query**: 방 목록 조회, 방 생성 mutation, 캐시 무효화
- **shadcn/ui**: 접근성 기반 커스텀 스타일 컴포넌트

## 핵심 구현

### 1. Socket.IO 싱글턴 + Hydration-safe 초기화

Next.js App Router 환경에서 Socket.IO를 서버 사이드에서 초기화하면 Hydration mismatch가 발생합니다.
모듈 스코프 전역 인스턴스와 클라이언트 전용 초기화로 이 문제를 해결했습니다.

- `useState(null)`로 서버·클라이언트 렌더 결과를 일치시켜 Hydration 오류 방지
- `queueMicrotask`로 초기 렌더 직후에 `setState` 수행
- `disconnectSocket()`으로 방 이탈 시 인스턴스를 정리해 새 쿠키로 재연결 가능

### 2. 역할 기반 뷰 — 단일 URL, 두 가지 화면

`/room/[roomId]?role=owner|participant` 쿼리로 역할을 구분하고, 역할에 따라 서로 다른 UI를 제공합니다.

- **방장**: 참가자 목록·준비 현황 확인, 뽑기 실행, 방 설정 변경, QR 공유
- **참가자**: 준비 상태 토글, 닉네임 변경, 결과 카드 애니메이션 확인
- 방장 인증은 방 생성 시 서버가 발급한 HTTP-only 쿠키를 `withCredentials: true`로 전달하는 방식

### 3. 애니메이션 타이밍 동기화

서버가 `spin:resolved` 이벤트로 `animation.revealAt`, `animation.durationMs`를 전달합니다.
클라이언트는 이 값을 기준으로 카드 모임 → 플립 → 결과 공개 시퀀스를 맞춥니다.
서버 주도 타이밍으로 클라이언트 간 일관된 애니메이션을 보장합니다.

### 4. DOM 직접 애니메이션으로 리렌더 최소화

`useState`로 매 프레임 애니메이션 값을 갱신하면, 카드 수가 늘어날 때 전체 컴포넌트 트리가 매 프레임 리렌더되어 성능이 저하됩니다.
Motion의 `animate(element, keyframes, options)`를 사용해 **React 렌더 사이클 밖에서** DOM을 직접 제어해 이 문제를 해결했습니다.

- `useCardDomAnimation`, `useParticipantDomAnimation` 훅에서 적용
- `transform`, `opacity` 위주의 합성 레이어 애니메이션으로 GPU 활용

### 5. PixelCard 디바이스별 적응형 렌더링

모든 기기에서 동일한 픽셀 밀도·프레임으로 실행하면 저사양 기기에서 프레임 드롭이 발생합니다.
`getDevicePerformanceLevel()`로 기기 성능을 감지한 뒤 픽셀 밀도와 프레임 상한을 조절했습니다.

- `hardwareConcurrency`, `deviceMemory`, UA 기반 `low / medium / high` 3단계 분류
- 저사양 30fps, 고사양 60fps 동작
- 뽑기 애니메이션 중에는 PixelCard 대신 단순 div로 교체해 프레임 드롭 방지

### 6. API 에러 처리 체계

방 생성 API 에러를 사용자 친화적인 한글 메시지로 변환합니다.

- `ECONNABORTED`, 네트워크 오류, 429, 500 등 상황별 안내 메시지 제공
- 백엔드 응답 메시지가 있으면 그것을 우선 표시
- `RoomApiErrorResponse`, `RoomErrorCode` enum과 연동해 타입 안전하게 처리

## 트러블슈팅

### 애니메이션 Phase 간 충돌 방지

Phase 전환이 빠를 때 이전 애니메이션이 실행 중인 상태에서 새 phase가 시작되면 시각적 충돌이 발생했습니다.
`cancelActiveAnimations()`를 만들어 진행 중인 Motion 애니메이션을 `anim.stop()`으로 즉시 중단하고 초기화한 뒤 새 phase를 시작하도록 수정했습니다.

### 방 입장 거부 시 LocalStorage 정리

만료·삭제된 방에 재입장을 시도할 때, LocalStorage에 남은 기록이 있어 반복적으로 잘못된 입장 시도가 발생했습니다.
`room:join:rejected` 이벤트 수신 시 `reason` 코드에 따라 `removeOwnedRoom`, `removeVisitedRoom`을 호출해 기록을 즉시 정리하도록 수정했습니다.
