const baseUrl = "/images/contentsImages/";

export const ProjectContents = {
  cocktail: {
    isTeam: true,
    name: "알딸딸: 나만의 칵테일 레시피",
    images: [
      baseUrl + "cocktail1.png",
      baseUrl + "cocktail2.png",
      baseUrl + "cocktail3.png",
      baseUrl + "cocktail4.png",
      baseUrl + "cocktail5.png",
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
      "칵테일 레시피 목록 조회",
      "칵테일 레시피 검색",
      "레시피 찜하기",
      "찜목록 조회 및 수정",
      "내가 만든 레시피 조회 및 삭제",
      "error boundary",
    ],
    lessonLearn:
      "이 팀 프로젝트를 통해 협업에 대한 좋은 경험을 얻게 되었습니다. 혼자서 떠올리기 어려운 팀원들의 아이디어들은 해당 서비스를 만드는데 있어서 큰 역할을 했고, 해당 아이디어들을 결합하여 서비스를 만들어내는 과정은 힘들기도 하지만 매우 보람찼습니다. 협업의 과정이 순탄하게만 흘러가지 않았지만 이를 통해 팀으로 프로젝트를 만들어 나갈때 컨벤션과 자신의 아이디어나 생각을 상대방이 이해할 수 있게 정리하는 것에 대한 중요성을 깨달았습니다.",
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
      "최초에는 todo 기능만 간단하게 만들었지만 추후에 달력 기능을 추가하면서 복수의 컨텐츠를 다루는데 있어서 컴포넌트 간에 데이터를 동기화 하는 방법에 대한 방법에 대해 알아가는 경험이 되었습니다. 아직 완성하지 못한 기능들이 있어서 시간이 날때 업데이트를 해나가면서 프로젝트를 장기적으로 관리하는 경험도 기대하고 있습니다.",
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
      "제가 만든 프로젝트들에 대한 포트폴리로입니다. 기존의 create-react-app 방식을 벗어나 이전부터 관심을 가지던 next js와 tailwind를 경험해보기 위해서 next, tailwind를 사용해 제작하였습니다.",
    url: {
      github: "https://github.com/Rosevilleage/my-portfolio",
      deploy: "",
      blog: "",
    },
    stack: ["typescript", "redux-toolkit", "tailwind", "next", "react-icons"],
    mypart: [
      "browser drag, resize",
      "browser 최소화 및 최대화",
      "동적 browser z-index 기능",
    ],
    lessonLearn:
      "이번 프로젝트를 통해 drag, resize 기능을 패키지 없이 구현하면서 mouse event에 대한 새로운 경험을 하게되었습니다. 또한 이번 기회에 tailwind 라는 새로운 스타일링 기법을 경험해보며 자주 사용하던 styled-components와 비교해보면서 각 방법의 장단점을 채감해보는 시간이었습니다.",
  },
};

export const aboutContent = {
  name: "About Me",
  introduction:
    "다양한 기능을 만드는 것을 좋아하며, 새로운 지식을 만나는 경험을 통해 문제해결 능력을 성장시켜, 문제해결을 위해 같이 의논하고 싶은 개발자가 되고 싶은 장찬희입니다.",
  contact: {
    email: "jangchanhee0@gmail.com",
    phone: "010-6508-3557",
    github: "https://github.com/Rosevilleage",
    blog: "https://velog.io/@cksgml1914",
  },
  skill: [
    "javascript",
    "html5",
    "css",
    "typescript",
    "react",
    "styled-components",
    "redux-toolkit",
    "axios",
  ],
};
