import type { AppTitle } from "@/components/desktop/config";

const baseUrl = "/images/contentsImages/";

export type ExperienceDocId =
  | "cocktail"
  | "mealmory"
  | "cuther"
  | "find-mat"
  | "rlt";

export const PROJECTS_BY_CATEGORY: {
  freelance: AppTitle[];
  team: AppTitle[];
  solo: AppTitle[];
} = {
  freelance: ["fitrace", "scraping"],
  team: ["cocktail", "mealmory"],
  solo: ["cuther", "find-mat", "portfolio", "rlt"],
};

export const ProjectContents = {
  cuther: {
    isTeam: false,
    name: "Cuther: 귀여운 날씨",
    images: [
      baseUrl + "cutherScreen1.png",
      baseUrl + "cutherScreen2.png",
      baseUrl + "cutherScreen3.png",
      baseUrl + "cutherScreen4.png",
    ],
    introduction: {
      text: "공공데이터 포털의 기상청 api를 통해 제작한 날씨앱입니다.",
      fns: [
        "현재 위치의 실시간 날씨 정보를 확인할 수 있습니다.",
        "움직이는 캐릭터를 통해 적절한 외출복을 가늠할 수 있습니다.",
        "시간별 날씨 정보를 확인할 수 있습니다.",
        "주간 날씨 정보를 확인할 수 있습니다.",
        "기상 특보, 예비 특보 정보를 확인할 수 있습니다.",
      ],
    },
    experience: true,
    experienceDocId: "cuther" as const,
    url: {
      github: "https://github.com/Rosevilleage/cuther",
      deploy: "",
      blog: "",
    },
    stack: [
      "TypeScript",
      "React Native",
      "Zustand",
      "TanStack Query",
      "React Navigation",
      "React Native Config",
      "Lottie",
      "Axios",
    ],
    mypart: [
      "adobe illustrator, adobe after effects를 통한 캐릭터 및 에니메이션 제작",
      "Figma를 통한 스크린 디자인 및 아이콘 제작",
      "lottie files를 통한 애니메이션 적용",
      "react native config를 통한 환경 설정",
      "react navigation를 통한 페이지 라우팅",
      "tanstack-query를 통한 데이터 캐싱 및 가공",
    ],
    isMobile: true,
  },
  fitrace: {
    isTeam: true,
    name: "fitrace Admin Page",
    images: [
      baseUrl + "fitrace1.png",
      baseUrl + "fitrace2.png",
      baseUrl + "fitrace3.png",
      baseUrl + "fitrace4.png",
    ],
    introduction: {
      text: "저의 첫 외주 작업 프로젝트로 운동 관리 애플리케이션의 관리자 페이지를 담당했습니다.",
      fns: [
        "회원의 정보를 열람할 수 있습니다.",
        "특정일자 혹은 기간동안의 서비스 이용량을 확인할 수 있습니다.",
        "회원목록을 엑셀파일로 다운로드 할 수 있습니다.",
        "회원들에게 푸시메시지를 전송할 수 있습니다.",
      ],
    },
    experience: false,
    stack: [
      "React",
      "TypeScript",
      "Create React App",
      "React Router",
      "Styled-components",
      "Axios",
      "date-fns",
      "React DatePicker",
      "React Chart.js 2",
      "React Icons",
      "React Cookie",
    ],
    mypart: [
      "페이지 디자인",
      "cryptojs를 통한 비밀번호 암호화",
      "react-datepicker를 통한 날짜 선택 및 표시",
      "react-chartjs-2를 통해 통계 데이터를 차트로 표현",
      "접속 기록을 달력 모달로 표시",
      "서버로 부터 받은 excel 파일 다운로드 기능",
    ],
  },
  scraping: {
    isTeam: true,
    name: "scraping Admin Page",
    images: [
      baseUrl + "scraping1.png",
      baseUrl + "scraping2.png",
      baseUrl + "scraping3.png",
      baseUrl + "scraping4.png",
      baseUrl + "scraping5.png",
      baseUrl + "scraping6.png",
    ],
    introduction: {
      text: "중고 자재 경매 플랫폼인 scraping의 어드민 페이지를 제작했습니다.",
      fns: [
        "회원의 정보를 열람하거나 이용정리를 시킬 수 있습니다.",
        "경매 정보를 열람하거나 삭제할 수 있습니다.",
        "서비스의 배너를 수정할 수 있습니다.",
        "회원들에게 푸시메시지를 전송할 수 있습니다.",
      ],
    },
    experience: false,
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Styled-components",
      "Axios",
      "SweetAlert2",
      "React Icons",
      "React Cookie",
    ],
    mypart: [
      "페이지 디자인",
      "cryptojs를 통한 비밀번호 암호화",
      "drag & drop을 통한 복수의 이미지 전송",
      "clipbord 복사",
      "이미지 캐러셀 슬라이더",
    ],
  },
  cocktail: {
    isTeam: true,
    name: "알딸딸: 나만의 칵테일 레시피",
    images: [
      baseUrl + "cocktails1.png",
      baseUrl + "cocktails2.png",
      baseUrl + "cocktails3.png",
      baseUrl + "cocktails4.png",
      baseUrl + "cocktails5.png",
    ],
    introduction: {
      text: "칵테일 레시피를 공유하고 게시할 수 있는 서비스로, 일반적으로 알려진 정규 칵테일 레시피와 이용자들이 공유한 특별한 레시피를 접할 수 있는 커뮤니티 서비스입니다. 처음으로 아이디어를 모아 진행한 프로젝트로 프론트엔드 팀과 백엔드 팀으로 구성되어 있습니다.",
      fns: [
        "칵테일 레시피에 대한 정보와 이미지를 게시할 수 있습니다.",
        "회원만의 닉네임과 프로필 이미지를 수정할 수 있습니다.",
        "마음에 드는 레시피를 즐겨찾기하여, 북마크 목록에서 조회할 수 있습니다.",
        "검색을 통해 특정 칵테일의 레시피를 검색할 수 있습니다.",
      ],
    },
    experience: true,
    experienceDocId: "cocktail" as const,
    url: {
      github: "https://github.com/codestates-seb/seb43_main_011",
      deploy: "",
      blog: "https://velog.io/@cksgml1914/이미지만-따로",
    },
    stack: [
      "TypeScript",
      "React",
      "Create React App",
      "TanStack Query",
      "React Router",
      "Styled-components",
      "Axios",
      "Redux Toolkit",
      "React Icons",
    ],
    mypart: [
      "레시피 목록 조회, 검색, 삭제 및 찜하기 기능 구현",
      "my page 나만의 레시피 목록 ui 구현",
      "my page 찜 목록 ui 구현",
      "error boundary 적용",
      "react router를 통한 페이지 라우팅 및 Outlet을 통한 페이지 레이아웃 적용",
      "레시피 카드 hover 애니메이션, 네비게이션 바 등장 애니메이션",
      "s3를 통한 정적 배포",
      "GitHub 이슈와, 프로젝트 칸반을 통한 프론트엔드의 전체적인 스케줄 관리",
      "반응형 디자인",
    ],
  },
  mealmory: {
    isTeam: true,
    name: "밀모리: 식사의 추억",
    images: [
      baseUrl + "mealmory1.png",
      baseUrl + "mealmory2.png",
      baseUrl + "mealmory3.png",
      baseUrl + "mealmory4.png",
    ],
    introduction: {
      text: "식단을 저장하고, 관리할 수 있는 서비스입니다. 섭취한 식단을 저장하고 활동 칼로리를 기반으로 적정량의 칼로리를 섭취했는지 여부와 bmi를 기준으로 비만도를 측정할 수 있습니다.",
      fns: [
        "섭취한 식단을 등록, 수정, 삭제할 수 있습니다.",
        "음식을 검색해 탄수화물, 단백질, 지방의 함유량을 확인할 수 있습니다.",
        "직접 음식과 칼로리 정보를 입력해 식단을 저장할 수도 있습니다.",
        "달력을 통해 통계 데이터 혹은 식단 저장 일자를 선택할 수 있습니다.",
        "통계 데이터와 캐릭터를 통해서 적정량의 칼로리를 섭취했는지 확인할 수 있습니다.",
        "다크모드와 라이트 모드 등 화면의 테마를 선택할 수 있습니다.",
        "사용자의 정보(키, 몸무게 등)을 수정할 수 있습니다.",
      ],
    },
    experience: true,
    experienceDocId: "mealmory" as const,
    url: {
      github: "https://github.com/mealmory/mealmory_fe",
      deploy: "",
      blog: "",
      notion:
        "https://tunajo.notion.site/mealmory-7a6daef1fc35475a87d7890931354bbb?pvs=74",
    },
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "return-fetch",
      "React Chart.js 2",
      "React Icons",
      "js-cookie",
      "SweetAlert2",
      "uuid",
    ],
    mypart: [
      "날짜 선택 달력 구현",
      "jwt api httpOnly secure cookie 핸들링",
      "유저 정보 web crypto api AES-GCM 암호화",
      "다크모드",
      "식단 검색",
      "식단 추가, 수정, 삭제",
      "통계 데이터 차트 표현",
      "반응형 디자인",
    ],
  },
  rlt: {
    isTeam: true,
    name: "당첨?당첨!",
    images: [
      baseUrl + "rlt1.png",
      baseUrl + "rlt2.png",
      baseUrl + "rlt3.png",
      baseUrl + "rlt4.png",
      baseUrl + "rlt5.png",
      baseUrl + "rlt6.png",
    ],
    introduction: {
      text: "친구나 팀원과 함께 실시간으로 랜덤 뽑기를 할 수 있는 웹 애플리케이션입니다. Socket.IO 기반의 실시간 동기화로 여러 사용자가 동시에 결과를 확인할 수 있으며, 방장이 방을 생성하고 참가자가 QR 코드 스캔 또는 링크로 입장한 뒤 모두 준비 완료 시 뽑기를 실행합니다.",
      fns: [
        "방장이 방을 생성하고 제목·당첨자 수·감정(당첨/미당첨) 등을 설정할 수 있습니다.",
        "참가자가 QR 코드 스캔 또는 링크로 입장할 수 있습니다.",
        "참가자가 모두 준비 완료 후 방장이 뽑기를 실행합니다.",
        "카드 애니메이션을 통해 결과가 모든 사용자에게 동시에 전달됩니다.",
        "혼자 뽑기 모드(SessionStorage 기반)를 지원합니다.",
      ],
    },
    experience: true,
    experienceDocId: "rlt" as const,
    url: {
      github: "https://github.com/Rosevilleage/roulette-together-fe",
      deploy: "https://roulette-together.com",
      blog: "",
    },
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Socket.IO Client",
      "Motion",
      "GSAP",
      "TanStack Query",
      "shadcn/ui",
      "qrcode.react",
    ],
    mypart: [
      "FSD(Feature-Sliced Design) 아키텍처로 레이어 간 단방향 의존성 유지",
      "Socket.IO 싱글턴 + Hydration-safe 초기화로 Next.js App Router 환경 대응",
      "역할 기반 뷰(방장/참가자)와 단일 URL 설계",
      "WebSocket 이벤트 페이로드 TypeScript 타입 정의로 타입 안전성 확보",
      "서버 주도 애니메이션 타이밍(revealAt, durationMs) 동기화",
      "Motion의 DOM 직접 애니메이션으로 카드 수 증가 시 React 리렌더 최소화",
      "디바이스 성능 레벨 감지 후 PixelCard 적응형 렌더링",
    ],
    isMobile: true,
  },
  "find-mat": {
    isTeam: false,
    name: "Find Mat: 맛찾기",
    images: [
      baseUrl + "find-mat1.png",
      baseUrl + "find-mat2.png",
      baseUrl + "find-mat3.png",
      baseUrl + "find-mat4.png",
    ],
    introduction: {
      text: "오늘 뭐 먹지? 고민을 해결하기 위한 음식 추천 모바일 웹 애플리케이션입니다. 음식을 랜덤으로 추천받고, 주변 음식점을 Kakao Map에서 검색할 수 있습니다.",
      fns: [
        "슬롯머신 UI로 음식을 랜덤 추천받을 수 있습니다.",
        "기본 목록(97종)과 사용자 커스텀 목록을 토글하여 사용할 수 있습니다.",
        "추천받은 음식으로 내 주변 음식점을 Kakao Map Places API로 검색할 수 있습니다.",
        "Geolocation 기반 현재 위치로 지도 중심을 설정합니다.",
      ],
    },
    experience: true,
    experienceDocId: "find-mat" as const,
    url: {
      github: "https://github.com/Rosevilleage/find-mat",
      deploy: "https://find-mat.vercel.app",
      blog: "",
    },
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "React Router",
      "Framer Motion",
      "Kakao Map SDK",
      "Vitest",
    ],
    mypart: [
      "Kakao Map SDK 동적 로더 및 map/marker/places-service 순수 함수 래핑",
      "useMapMarkers 훅으로 마커·오버레이 생성/갱신 및 메모리 누수 방지",
      "슬롯머신 위젯 3열 애니메이션 및 커스텀 목록 모드",
      "useFoodList로 localStorage 기반 음식 목록 관리, 한글 미완성 문자 검증",
    ],
    isMobile: true,
  },
  portfolio: {
    isTeam: false,
    name: "장찬희 portfolio",
    images: [
      baseUrl + "portfolio1.png",
      baseUrl + "portfolio2.png",
      baseUrl + "portfolio3.png",
      baseUrl + "portfolio4.png",
    ],
    introduction: {
      text: "제가 만든 프로젝트들에 대한 포트폴리오입니다. 기존의 create-react-app 방식을 벗어나 이전부터 관심을 가지던 next js와 tailwind를 경험해보기 위해서 next, tailwind를 사용해 제작하였습니다.",
      fns: [
        "칵테일 레시피에 대한 정보와 이미지를 게시할 수 있습니다.",
        "회원만의 닉네임과 프로필 이미지를 수정할 수 있습니다.",
        "마음에 드는 레시피를 즐겨찾기하여, 북마크 목록에서 조회할 수 있습니다.",
        "검색을 통해 특정 칵테일의 레시피를 검색할 수 있습니다.",
      ],
    },
    experience: false,
    url: {
      github: "https://github.com/Rosevilleage/my-portfolio",
      deploy: "",
      blog: "https://velog.io/@cksgml1914/next-tailwind-%EA%B2%BD%ED%97%98%EA%B8%B0-with-Portfolio",
    },
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Icons",
      "React Slick",
    ],
    mypart: [
      "browser drag, resize",
      "browser 최소화 및 최대화",
      "browser 동작 시 z-index 업데이트",
      "반응형 디자인",
    ],
  },
};

export const aboutContent = {
  name: "About me",
  introduction: "사용자 경험을 중심으로 가치를 만드는 프론트엔드 개발자 장찬희입니다.",
  background: [
    "“사용자에게 가치를 전달하는 제품” 제가 개발하는 서비스나 프로젝트를 바라보는 관점입니다. 가치를 안정적으로 전달하기 위해 기능을 구현하기 전 사용자 흐름을 먼저 고려하고, 화면에 필요한 상태와 데이터 흐름을 설계한 뒤 개발을 진행하고 있습니다.",
    "2건의 프리랜서 프로젝트를 진행하며 클라이언트 요구사항을 정리하고, 일정 내 기능을 납품하는 과정을 통해 책임감과 커뮤니케이션 역량을 강화했습니다.",
    "원활한 커뮤니케이션을 통해 효율적인 협업을 지향합니다. 코드 품질과 유지보수성을 고려하며, 지속적으로 학습하고 공유하는 개발자를 목표로 합니다.",
  ],
  contact: {
    email: "chanhee.frontend@gmail.com",
    github: "https://github.com/Rosevilleage",
    blog: "https://velog.io/@cksgml1914",
  },
  skill: [
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "React",
    "Styled-components",
    "Redux Toolkit",
    "Axios",
  ],
  education: [
    {
      ago: "2022.12\n ~ \n2023.06",
      name: "코드스테이츠 프론트엔드 과정",
      description: [
        "Javascript 기반 프론트엔드 과정",
        "React 위주의 학습",
        "두 번의 팀프로젝트 진행",
      ],
    },
  ],
};
