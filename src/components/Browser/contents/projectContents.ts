const baseUrl = "/images/contentsImages/";

export const ProjectContents = {
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
      "칵테일을 좋아하는 사람들이 서로 레시피를 공유하고 소통할 수 있는 서비스입니다. 사용자들은 자신이 만든 칵테일 레시피를 업로드하고, 다른 사용자들이 만든 레시피를 검색하고 참고할 수 있습니다. 이를 통해 칵테일을 좋아하는 이들끼리 서로의 레시피를 공유하고, 칵테일 제조의 새로운 아이디어를 얻을 수 있습니다.",
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
      "main, custom 페이지 칵테일 레시피 목록 조회",
      "칵테일 레시피 검색",
      "nav bar 기능 및 등장 애니메이션",
      "로그인 안내 페이지 구현",
      "레시피 찜하기 및 취소",
      "찜목록 조회 및 수정",
      "내가 만든 레시피 조회 및 삭제",
      "error boundary",
    ],
    lessonLearn:
      "이 팀 프로젝트를 통해 협업에 대한 좋은 경험을 얻게 되었습니다. 혼자서 떠올리기 어려운 팀원들의 아이디어들은 해당 서비스를 만드는데 있어서 큰 역할을 했고, 해당 아이디어들을 결합하여 서비스를 만들어내는 과정이 매우 즐거웠습니다. 협업의 과정이 순탄하게 흘러가지만은 않았지만 이를 통해 팀으로 프로젝트를 만들어 나갈때 컨벤션과 자신의 의견을 정리해 소통하는 것에 대한 중요성을 깨달았습니다. 또한 사용자 경험 피드백을 통해 사용자 경험을 수집하고 이를 개선하기위해 고민해보는 경험도 하게 되었습니다.",
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
      "공부를 위해 처음부터 만들어본 첫번째 프로젝트로 일정을 등록하고, 달력을 통해 관리할 수 있습니다. 간단한 api 서버를 express를 통해 만들었고, 추후에 Db까지 연결해 배포하는 것을 이 서비스의 최종 목표로 두고 있습니다.",
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
    lessonLearn:
      "최초에는 todo 기능만 간단하게 만들었지만 이후에 달력 기능을 추가하면서 복수의 컨텐츠를 다루는데 있어서 컴포넌트 간에 데이터를 동기화 하는 방법에 대한 방법에 대해 알아가는 경험이 되었습니다. 아직 완성하지 못한 기능들이 있어 추후 업데이트를 해나가면서 프로젝트를 장기적으로 관리하는 경험도 기대하고 있습니다.",
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
    ],
    lessonLearn:
      "이번 프로젝트를 통해 drag, resize 기능을 패키지 없이 구현하면서 mouse event에 대한 새로운 경험을 하게되었습니다. 또한 이번 기회에 tailwind 라는 유틸리티 클래스 스타일링을 경험해보며 자주 사용하던 styled-components와 비교해보면서 각 방법의 장단점을 채감해보는 시간이었습니다.",
  },
};

export const aboutContent = {
  name: "About Me",
  introduction:
    "다양한 기능을 만드는 것을 즐기며, 협업을 통해 완성도 있는 서비스를 만드는 것에 관심이 많은 장찬희 입니다.",
  background:
    "무심코 지나쳐왔던 웹 서비스들의 개성과 기능에 매력을 느껴 독학으로 3개월간 공부를 진행하다가 팀 프로젝트 등 공부에 도움을 얻고자 국비 지원 부트캠프를 수료했습니다.\n국비 지원 과정 중 백엔드 인원과 함께 진행한 두 번의 팀 프로젝트에서 프론트엔드 팀장을 맡은 경험이 있습니다. 팀 프로젝트 과정에서 두 번째 프로젝트는 첫 번째 프로젝트에서 문제 되었던 상황 공유, 코드 리뷰 등을 개선하여 배포까지 큰 차질 없이 진행했으며, 이후에도 더 완성도 있는 프로젝트를 위해 리팩토링을 진행하고 있습니다. 이러한 경험을 통해 협업을 위한 팀장과 팀원에 대한 역할을 이해하고 있습니다.",
  contact: {
    email: "jangchanhee0@gmail.com",
    phone: "010-6508-3557",
    github: "https://github.com/Rosevilleage",
    blog: "https://velog.io/@cksgml1914",
  },
  skill: ["javascript", "html5", "css", "react", "styled-components", "axios"],
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
    {
      ago: "2016.02\n ~ \n2022.02",
      name: "평택대학교",
      description: ["신학 / 실용음악 복수 전공"],
    },
  ],
};
