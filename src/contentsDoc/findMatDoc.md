# Find Mat — 맛찾기

## 프로젝트 개요

"오늘 뭐 먹지?" 고민을 해결하기 위한 음식 추천 모바일 웹 애플리케이션입니다. 사용자가 음식을 랜덤으로 추천받고, 주변 음식점을 Kakao Map에서 검색할 수 있도록 지원합니다. Feature-Sliced Design(FSD) 기반으로 app → pages → widgets → features → entities → shared 레이어를 구성했습니다.

## 기술 스택

- **React 19, TypeScript**: 컴포넌트 및 타입 안정성
- **Vite 7**: 빌드 도구
- **Tailwind CSS 4, class-variance-authority**: 스타일링
- **TanStack React Query, React Router 7**: 데이터 페칭 및 라우팅
- **Framer Motion**: 슬롯머신 애니메이션
- **Kakao Map SDK**: 동적 로드, Places API
- **Vitest, Testing Library**: 단위·통합 테스트

## 핵심 구현

### 1. Kakao Map SDK 래핑 및 동적 로드

Kakao Map SDK를 순수 함수 형태로 래핑해 React 생명주기와 분리하고 테스트 용이성을 높였습니다.

- `loadKakaoMapSDK()`: 비동기 스크립트 로드, `libraries=services`로 Places API 포함, 중복 로드 방지
- `map-manager`: `createMap`, `setCenter`, `setLevel` — 좌표·줌 레벨 검증, `NaN` 에러 처리
- `marker-manager`: `createMarker`, `updateMarkerStyle`, `createCustomOverlay` — 선택/일반 상태별 z-index·이미지 변경
- `places-service`: `searchPlacesByKeyword` — Kakao 콜백을 Promise로 변환, 타입 가드 제공

### 2. useMapMarkers 마커 관리

`useMapMarkers({ map, restaurants, selectedId, onMarkerClick })`로 마커·오버레이를 생성/갱신합니다. `restaurants` 변경 시 cleanup에서 기존 마커·오버레이에 `setMap(null)`을 호출해 메모리 누수를 방지했습니다.

### 3. 슬롯머신 애니메이션

3열 슬롯(카테고리/메뉴, 아이콘, 메뉴)에 Framer Motion으로 2.0초 / 2.5초 / 3.0초 순차 정지. `SPARKLE_POSITIONS`로 스파클 위치를 미리 정의해 `Math.random()`을 제거하여 hydration·리렌더 시 애니메이션 일관성을 유지했습니다.

### 4. 음식 목록 관리 및 Geolocation

- `useFoodList()`: localStorage 기반, `addFood`에서 공백·미완성 한글(자음/모음만)·중복·최대 50개 검증
- `useGeolocation()`: `getCurrentPosition` 실패 시 서울 기본값, `PERMISSION_DENIED`·`POSITION_UNAVAILABLE`·`TIMEOUT`별 에러 메시지 분기
- Permissions API로 권한 변경 감지 후 토스트 알림 및 새로고침

## 트러블슈팅

### React 상태 업데이트와 addFood 결과

`setFoods`가 비동기라 `addFood` 호출 직후 결과를 바로 반환하면 최신 상태를 반영하지 못했습니다. functional update `setFoods((currentFoods) => { ... })` 내부에서 검증 후 `result`를 설정하여 반환하도록 수정했습니다.

### 토스트 중복 표시

권한 에러 등이 `showToast` 의존성으로 인해 여러 번 표시되는 문제가 있었습니다. `showToastRef`와 `hasShownToast.current`로 한 번만 토스트를 표시하고, useEffect 의존성에서 `showToast`를 제거했습니다.

### 한글 미완성 문자 입력

자음/모음만 입력해도 `addFood`에서 통과되는 문제가 있었습니다. `incompleteKoreanRegex = /[\u3131-\u318E]/`(Hangul Compatibility Jamo)로 검사하여, 매칭 시 "완성된 한글만 입력 가능합니다" 에러를 반환하도록 했습니다.
