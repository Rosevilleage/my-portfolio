# 뽑기?뽑기! — 실시간 멀티플레이 랜덤 뽑기

## 프로젝트 개요

친구나 팀원과 함께 실시간으로 랜덤 뽑기를 할 수 있는 웹 애플리케이션입니다. Socket.IO 기반의 백엔드와 연동하여 여러 사용자가 동시에 결과를 확인할 수 있으며, 방장이 방을 생성하고 참가자가 QR 코드 스캔 또는 링크로 입장한 뒤 모두 준비 완료 시 뽑기를 실행합니다.

## 기술 스택

- **Next.js 16 (App Router)**: 파일 기반 라우팅, Metadata API
- **TypeScript (strict)**: WebSocket 페이로드 타입 강제
- **Tailwind CSS 4**: 유틸리티 기반 반응형 UI
- **Zustand**: 경량 전역 스토어, WebSocket → 스토어 업데이트 패턴
- **Socket.IO Client**: WebSocket, 자동 재연결, withCredentials로 방장 인증 쿠키 전달
- **Motion, GSAP**: 카드 애니메이션, 텍스트 셔플 효과
- **TanStack Query**: 방 목록 조회, 방 생성 mutation
- **shadcn/ui**: 접근성 + 커스텀 스타일

## 핵심 구현

### 1. Socket.IO 싱글턴 + Hydration-safe 초기화

Next.js App Router 환경에서 Socket.IO를 서버에서 초기화하면 Hydration mismatch가 발생합니다. 모듈 스코프 전역 인스턴스와 클라이언트 전용 초기화로 해결했습니다.

- `useState(null)`로 서버/클라이언트 렌더 결과 일치
- `queueMicrotask`로 초기 렌더 직후 setState 수행
- `withCredentials: true`로 방장 인증용 쿠키 전달

### 2. 역할 기반 뷰 — 단일 URL, 두 가지 화면

`/room/[roomId]?role=owner|participant` 쿼리로 역할을 구분하고, 방장/참가자에 따라 서로 다른 UI를 제공합니다. 방장은 참가자 목록·준비 현황, 뽑기 실행, 방 설정 변경, QR 공유를 담당하고, 참가자는 준비 토글, 닉네임 변경, 결과 카드 애니메이션을 담당합니다.

### 3. 애니메이션 타이밍 동기화

서버가 `spin:resolved` 이벤트로 `animation.revealAt`, `animation.durationMs`를 전달합니다. 클라이언트는 이 값을 기준으로 카드 모임 → 플립 → 결과 공개 시퀀스를 맞춥니다. 서버 주도의 타이밍으로 클라이언트 간 일관된 애니메이션을 보장합니다.

### 4. DOM 직접 애니메이션으로 리렌더 최소화

`useState`로 매 프레임 애니메이션 값을 갱신하면 카드 수가 늘어날 때 전체 트리가 매 프레임 리렌더되어 성능 저하가 발생합니다. Motion의 `animate(element, keyframes, options)`를 사용해 **React 렌더 사이클 밖에서** DOM을 직접 애니메이션하여 이 문제를 해결했습니다.

### 5. PixelCard 디바이스별 적응형 렌더링

`getDevicePerformanceLevel()`로 기기 성능을 감지한 뒤 픽셀 밀도·프레임 제한을 조절합니다. 저사양에서는 30fps, 고사양에서는 60fps로 동작하며, 애니메이션 중에는 PixelCard 대신 단순 div로 교체해 저사양 기기에서의 프레임 드롭을 방지합니다.

### 6. API 에러 처리 체계

방 생성 API 에러를 사용자 친화적인 한글 메시지로 변환합니다. `ECONNABORTED`, 429, 500 등 상태별로 적절한 안내 메시지를 제공하고, `RoomApiErrorResponse`, `RoomErrorCode` enum과 연동하여 타입 안전하게 처리합니다.

## 트러블슈팅

### 애니메이션 Phase 간 충돌 방지

Phase 전환이 빠를 때 이전 애니메이션이 아직 실행 중인데 새 phase가 시작되면 시각적 충돌이 발생합니다. `cancelActiveAnimations()`로 진행 중인 Motion 애니메이션을 `anim.stop()` 후 초기화하여 해결했습니다.

### 방 입장 거부 시 LocalStorage 정리

유효하지 않은 방(만료·삭제 등)에 대한 입장 시도 시 LocalStorage에 남은 기록이 있어 잘못된 재입장 시도가 유발됩니다. `room:join:rejected` 수신 시 `reason`에 따라 `removeOwnedRoom`, `removeVisitedRoom`을 호출하여 정리합니다.
