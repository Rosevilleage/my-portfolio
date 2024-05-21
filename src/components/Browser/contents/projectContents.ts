const baseUrl = "/images/contentsImages/";

export const ProjectContents = {
  fitrace: {
    isTeam: true,
    name: "fitrace Admin Page",
    images: [
      baseUrl + "fitrace1.png",
      baseUrl + "fitrace2.png",
      baseUrl + "fitrace3.png",
      baseUrl + "fitrace4.png",
    ],
    introduction:
      "저의 첫 외주 작업 프로젝트로 운동 관리 애플리케이션의 관리자 페이지를 담당했습니다.",

    stack: [
      "create-react-app",
      "react-router",
      "styled-components",
      "axios",
      "date-fns",
      "react-datepicker",
      "react-chartjs-2",
      "react-icons",
      "react-cookie",
    ],
    mypart: [
      "관리자 페이지 디자인 및 layout 설계",
      "react-cookie와 axios interceptors를 통한 jwt 기반 관리자 로그인",
      "react-datepicker를 통한 날짜 선택 및 표시",
      "react-chartjs-2를 통해 통계 데이터를 차트로 표현",
      "접속 기록을 달력 모달로 표시",
      "서버로 부터 받은 excel 파일 다운로드 기능",
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
    introduction:
      "칵테일을 좋아하는 사람들이 서로 레시피를 공유한다는 컨셉의 프로젝트입니다. 처음으로 아이디어를 모아 진행한 프로젝트로 프론트엔드 팀과 백엔드 팀으로 구성되어 있습니다.",
    url: {
      github: "https://github.com/codestates-seb/seb43_main_011",
      deploy:
        "http://resevilleage-bukit.s3-website.ap-northeast-2.amazonaws.com/",
      blog: "https://velog.io/@cksgml1914/이미지만-따로",
    },
    stack: [
      "typescript",
      "react-query",
      "react-router",
      "styled-components",
      "axios",
      "redux-toolkit",
      "create-react-app",
      "react-icons",
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
  todo: {
    isTeam: false,
    name: "todo-list",
    images: [
      baseUrl + "todo1.png",
      baseUrl + "todo2.png",
      baseUrl + "todo3.png",
      baseUrl + "todo4.png",
      baseUrl + "todo5.png",
    ],
    introduction:
      "공부를 위해 처음부터 만들어본 첫번째 프로젝트로 일정을 관리하고, 달력을 통해 확인 할 수 있습니다. 간단한 api 서버를 express를 통해 만들었고, 추후에 데이터 베이스까지 연결해 배포하는 것을 이 서비스의 최종 목표로 두고 있습니다.",
    url: {
      github: "https://github.com/Rosevilleage/todo-list",
      deploy: "",
      blog: "",
    },
    stack: [
      "javascript",
      "create-react-app",
      "redux-toolkit",
      "data-fns",
      "react-router",
      "styled-components",
      "axios",
    ],
    mypart: [
      "일정 등록 및 삭제",
      "달력 및 모달창 기능",
      "북마크 기능을 통한 완료/반복 일정 관리",
    ],
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
    introduction:
      "제가 만든 프로젝트들에 대한 포트폴리오입니다. 기존의 create-react-app 방식을 벗어나 이전부터 관심을 가지던 next js와 tailwind를 경험해보기 위해서 next, tailwind를 사용해 제작하였습니다.",
    url: {
      github: "https://github.com/Rosevilleage/my-portfolio",
      deploy: "",
      blog: "https://velog.io/@cksgml1914/next-tailwind-%EA%B2%BD%ED%97%98%EA%B8%B0-with-Portfolio",
    },
    stack: [
      "typescript",
      "redux-toolkit",
      "tailwind",
      "next",
      "react-icons",
      "react-slick",
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
  name: "About Me",
  introduction:
    "다양한 기능을 만드는 것을 즐기며, 협업을 통해 완성도 있는 서비스를 만드는 것에 관심이 많은 장찬희 입니다.",
  background: [
    "새로운 기능을 구현해 보는 것에 관심이 많습니다.",
    "더 나은 프로젝트를 위해 기술적인 소통을 하는 것을 중요하게 생각합니다. 이를 위해 학습한 내용을 빠르게 이해하거나 동료에게 효과적으로 설명할 수 있도록 블로그에 정리해 기록하고 있습니다.",
    "국비지원 부트캠프 교육 중  진행한 두 번의 팀프로젝트경험을 통해 협업과 팀원 간 소통의 중요성에 대해 이해하고 있습니다.",
    "원활한 소통을 위해 의견을 상대방이 이해할 수 있도록 전달하는 능력을 기르기 위해 블로그에 학습한 것과 스스로 배운 점을 정리해 기록하고있습니다.",
    "회의나 코드 리뷰를 통해 다양한 의견을 듣는 것을 선호합니다. 현업자 멘토링 기간에 피드백에 대한 응답이 빠르고, 수용성이 좋다는 평가를 받았습니다.",
  ],
  contact: {
    email: "chanhee.frontend@gmail.com",
    github: "https://github.com/Rosevilleage",
    blog: "https://velog.io/@cksgml1914",
  },
  skill: [
    "javascript",
    "typescript",
    "html",
    "css",
    "react",
    "styled-components",
    "axios",
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
