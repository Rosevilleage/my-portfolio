# 맛찾기 — 음식 추천 & 주변 맛집 검색

## 프로젝트 개요

"오늘 뭐 먹지?" 고민을 해결하기 위한 음식 추천 모바일 웹 애플리케이션입니다.
슬롯머신 애니메이션으로 음식을 랜덤 추천받고, 결과를 바탕으로 Kakao Map에서 주변 음식점을 바로 검색할 수 있습니다.
Feature-Sliced Design(FSD) 기반으로 레이어를 구성해 기능 간 의존성을 단방향으로 유지했습니다.

## 기술 스택

- **React 19, TypeScript**: 컴포넌트 설계 및 타입 안전성
- **Vite 7**: 빠른 빌드 및 HMR
- **Tailwind CSS 4, class-variance-authority**: 유틸리티 기반 반응형 스타일링
- **TanStack React Query, React Router 7**: 비동기 데이터 페칭 및 라우팅
- **Framer Motion**: 슬롯머신 스핀 애니메이션
- **Kakao Map SDK**: 동적 로드, Places API 기반 음식점 검색
- **Vitest, Testing Library**: Kakao SDK mock 기반 단위·통합 테스트

## 핵심 구현

### 1. Kakao Map SDK 래핑 및 동적 로드

Kakao Map SDK를 순수 함수 형태로 래핑해 React 생명주기와 분리하고, 테스트 용이성을 높였습니다.

- **`loadKakaoMapSDK()`**: 비동기 스크립트 로드, `libraries=services`로 Places API 포함
  중복 로드 방지를 위해 `isLoading`, `loadPromise`로 동시 요청이 들어와도 Promise 하나만 생성
- **`map-manager`**: `createMap`, `setCenter`, `setLevel` — 좌표·줌 레벨 유효성 검증 및 `NaN` 에러 처리
- **`marker-manager`**: `createMarker`, `updateMarkerStyle`, `createCustomOverlay` — 선택/일반 상태별 이미지·z-index 전환
- **`places-service`**: `searchPlacesByKeyword` — Kakao 콜백 기반 API를 Promise로 변환, 타입 가드 제공

### 2. 지도 마커 관리 — useMapMarkers

`useMapMarkers({ map, restaurants, selectedId, onMarkerClick })`로 마커와 오버레이를 생성·갱신합니다.
`restaurants` 변경 시 `useEffect` cleanup에서 기존 마커·오버레이에 `setMap(null)`을 호출해 메모리 누수를 방지했습니다.

### 3. 슬롯머신 애니메이션

3열 슬롯(카테고리/메뉴, 아이콘, 메뉴)에 Framer Motion으로 2.0초 / 2.5초 / 3.0초 순차 정지 애니메이션을 구현했습니다.

- 결과를 `randomFoods[15]`에 고정해 중앙 정렬이 흔들리지 않도록 처리
- 스파클 위치를 `SPARKLE_POSITIONS`로 미리 정의해 `Math.random()` 사용을 제거
  → hydration·리렌더 시에도 애니메이션 일관성 유지

### 4. 음식 목록 관리 및 Geolocation

- **`useFoodList()`**: localStorage 기반 커스텀 목록 관리
  - 공백, 미완성 한글(자음/모음만), 중복, 최대 50개 제한 검증
  - 기본 97개 목록 ↔ 내 목록 토글 상태 유지
- **`useGeolocation()`**: `getCurrentPosition` 실패 시 서울 좌표를 기본값으로 사용
  - `PERMISSION_DENIED` · `POSITION_UNAVAILABLE` · `TIMEOUT` 별 에러 메시지 분기
  - Permissions API로 권한 변경을 감지해 토스트 알림 후 자동 재요청

## 트러블슈팅

### addFood 호출 직후 최신 상태 미반영

`setFoods`는 비동기로 동작하기 때문에, `addFood` 호출 직후 결과를 바로 반환하면 갱신 전 상태를 참조하는 문제가 있었습니다.
`setFoods`를 functional update 형태로 변경해 `setFoods((currentFoods) => { ... })` 내부에서 검증과 결과 설정을 함께 처리하도록 수정했습니다.

### 권한 에러 토스트 중복 표시

`showToast`가 `useEffect` 의존성 배열에 포함되어 있어, 권한 에러 발생 시 토스트가 여러 번 표시되는 문제가 있었습니다.
`showToastRef`로 최신 함수 참조를 유지하고, `hasShownToast.current`로 표시 여부를 추적해 한 번만 토스트를 노출하도록 수정했습니다.

### 한글 미완성 문자 입력 통과

자음이나 모음만 입력해도 `addFood` 검증을 통과하는 문제가 있었습니다.
`/[\u3131-\u318E]/`(Hangul Compatibility Jamo) 정규식으로 미완성 한글을 검사하고,
매칭 시 "완성된 한글만 입력 가능합니다" 에러를 반환하도록 수정했습니다.

### 지도 마커 메모리 누수

`restaurants` 목록이 바뀔 때 이전 마커와 오버레이가 지도에 그대로 남아 누적되는 문제가 있었습니다.
`useEffect` cleanup에서 `markersRef.current`를 순회하며 `marker.setMap(null)`, `overlay.setMap(null)`을 호출해 새 마커 생성 전에 기존 요소를 제거하도록 수정했습니다.
