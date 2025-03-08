const baseUrl = '/images/contentsImages/';

export const ProjectContents = {
  fitrace: {
    isTeam: true,
    name: 'fitrace Admin Page',
    images: [
      baseUrl + 'fitrace1.png',
      baseUrl + 'fitrace2.png',
      baseUrl + 'fitrace3.png',
      baseUrl + 'fitrace4.png',
    ],
    introduction: {
      text: '저의 첫 외주 작업 프로젝트로 운동 관리 애플리케이션의 관리자 페이지를 담당했습니다.',
      fns: [
        '회원의 정보를 열람할 수 있습니다.',
        '특정일자 혹은 기간동안의 서비스 이용량을 확인할 수 있습니다.',
        '회원목록을 엑셀파일로 다운로드 할 수 있습니다.',
        '회원들에게 푸시메시지를 전송할 수 있습니다.',
      ],
    },
    experience: false,
    stack: [
      'create-react-app',
      'react-router',
      'styled-components',
      'axios',
      'date-fns',
      'react-datepicker',
      'react-chartjs-2',
      'react-icons',
      'react-cookie',
    ],
    mypart: [
      '페이지 디자인',
      'cryptojs를 통한 비밀번호 암호화',
      'react-datepicker를 통한 날짜 선택 및 표시',
      'react-chartjs-2를 통해 통계 데이터를 차트로 표현',
      '접속 기록을 달력 모달로 표시',
      '서버로 부터 받은 excel 파일 다운로드 기능',
    ],
  },
  scraping: {
    isTeam: true,
    name: 'scraping Admin Page',
    images: [
      baseUrl + 'scraping1.png',
      baseUrl + 'scraping2.png',
      baseUrl + 'scraping3.png',
      baseUrl + 'scraping4.png',
      baseUrl + 'scraping5.png',
      baseUrl + 'scraping6.png',
    ],
    introduction: {
      text: '중고 자재 경매 플랫폼인 scraping의 어드민 페이지를 제작했습니다.',
      fns: [
        '회원의 정보를 열람하거나 이용정리를 시킬 수 있습니다.',
        '경매 정보를 열람하거나 삭제할 수 있습니다.',
        '서비스의 배너를 수정할 수 있습니다.',
        '회원들에게 푸시메시지를 전송할 수 있습니다.',
      ],
    },
    experience: false,
    stack: [
      'vite',
      'react',
      'styled-components',
      'axios',
      'sweetalert2',
      'react-icons',
      'react-cookie',
    ],
    mypart: [
      '페이지 디자인',
      'cryptojs를 통한 비밀번호 암호화',
      'drag & drop을 통한 복수의 이미지 전송',
      'clipbord 복사',
      '이미지 캐러셀 슬라이더',
    ],
  },
  cocktail: {
    isTeam: true,
    name: '알딸딸: 나만의 칵테일 레시피',
    images: [
      baseUrl + 'cocktails1.png',
      baseUrl + 'cocktails2.png',
      baseUrl + 'cocktails3.png',
      baseUrl + 'cocktails4.png',
      baseUrl + 'cocktails5.png',
    ],
    introduction: {
      text: '칵테일 레시피를 공유하고 게시할 수 있는 서비스로, 일반적으로 알려진 정규 칵테일 레시피와 이용자들이 공유한 특별한 레시피를 접할 수 있는 커뮤니티 서비스입니다. 처음으로 아이디어를 모아 진행한 프로젝트로 프론트엔드 팀과 백엔드 팀으로 구성되어 있습니다.',
      fns: [
        '칵테일 레시피에 대한 정보와 이미지를 게시할 수 있습니다.',
        '회원만의 닉네임과 프로필 이미지를 수정할 수 있습니다.',
        '마음에 드는 레시피를 즐겨찾기하여, 북마크 목록에서 조회할 수 있습니다.',
        '검색을 통해 특정 칵테일의 레시피를 검색할 수 있습니다.',
      ],
    },
    experience: true,
    url: {
      github: 'https://github.com/codestates-seb/seb43_main_011',
      deploy: '',
      blog: 'https://velog.io/@cksgml1914/이미지만-따로',
    },
    stack: [
      'typescript',
      'react-query',
      'react-router',
      'styled-components',
      'axios',
      'redux-toolkit',
      'create-react-app',
      'react-icons',
    ],
    mypart: [
      '레시피 목록 조회, 검색, 삭제 및 찜하기 기능 구현',
      'my page 나만의 레시피 목록 ui 구현',
      'my page 찜 목록 ui 구현',
      'error boundary 적용',
      'react router를 통한 페이지 라우팅 및 Outlet을 통한 페이지 레이아웃 적용',
      '레시피 카드 hover 애니메이션, 네비게이션 바 등장 애니메이션',
      's3를 통한 정적 배포',
      'GitHub 이슈와, 프로젝트 칸반을 통한 프론트엔드의 전체적인 스케줄 관리',
      '반응형 디자인',
    ],
  },
  mealmory: {
    isTeam: true,
    name: '밀모리: 식사의 추억',
    images: [
      baseUrl + 'mealmory1.png',
      baseUrl + 'mealmory2.png',
      baseUrl + 'mealmory3.png',
      baseUrl + 'mealmory4.png',
    ],
    introduction: {
      text: '식단을 저장하고, 관리할 수 있는 서비스입니다. 섭취한 식단을 저장하고 활동 칼로리를 기반으로 적정량의 칼로리를 섭취했는지 여부와 bmi를 기준으로 비만도를 측정할 수 있습니다.',
      fns: [
        '섭취한 식단을 등록, 수정, 삭제할 수 있습니다.',
        '음식을 검색해 탄수화물, 단백질, 지방의 함유량을 확인할 수 있습니다.',
        '직접 음식과 칼로리 정보를 입력해 식단을 저장할 수도 있습니다.',
        '달력을 통해 통계 데이터 혹은 식단 저장 일자를 선택할 수 있습니다.',
        '통계 데이터와 캐릭터를 통해서 적정량의 칼로리를 섭취했는지 확인할 수 있습니다.',
        '다크모드와 라이트 모드 등 화면의 테마를 선택할 수 있습니다.',
        '사용자의 정보(키, 몸무게 등)을 수정할 수 있습니다.',
      ],
    },
    experience: true,
    url: {
      github: 'https://github.com/mealmory/mealmory_fe',
      deploy: '',
      blog: '',
      notion:
        'https://tunajo.notion.site/mealmory-7a6daef1fc35475a87d7890931354bbb?pvs=74',
    },
    stack: [
      'next js',
      'tailwindcss',
      'return-fetch',
      'react-chartjs-2',
      'react-icons',
      'js-cookie',
      'sweetalert2',
      'zustand',
      'uuid',
    ],
    mypart: [
      '날짜 선택 달력 구현',
      'jwt api httpOnly secure cookie 핸들링',
      '유저 정보 web crypto api AES-GCM 암호화',
      '다크모드',
      '식단 검색',
      '식단 추가, 수정, 삭제',
      '통계 데이터 차트 표현',
      '반응형 디자인',
    ],
  },
  portfolio: {
    isTeam: false,
    name: '장찬희 portfolio',
    images: [
      baseUrl + 'portfolio1.png',
      baseUrl + 'portfolio2.png',
      baseUrl + 'portfolio3.png',
      baseUrl + 'portfolio4.png',
    ],
    introduction: {
      text: '제가 만든 프로젝트들에 대한 포트폴리오입니다. 기존의 create-react-app 방식을 벗어나 이전부터 관심을 가지던 next js와 tailwind를 경험해보기 위해서 next, tailwind를 사용해 제작하였습니다.',
      fns: [
        '칵테일 레시피에 대한 정보와 이미지를 게시할 수 있습니다.',
        '회원만의 닉네임과 프로필 이미지를 수정할 수 있습니다.',
        '마음에 드는 레시피를 즐겨찾기하여, 북마크 목록에서 조회할 수 있습니다.',
        '검색을 통해 특정 칵테일의 레시피를 검색할 수 있습니다.',
      ],
    },
    experience: false,
    url: {
      github: 'https://github.com/Rosevilleage/my-portfolio',
      deploy: '',
      blog: 'https://velog.io/@cksgml1914/next-tailwind-%EA%B2%BD%ED%97%98%EA%B8%B0-with-Portfolio',
    },
    stack: [
      'typescript',
      'redux-toolkit',
      'tailwind',
      'next',
      'react-icons',
      'react-slick',
    ],
    mypart: [
      'browser drag, resize',
      'browser 최소화 및 최대화',
      'browser 동작 시 z-index 업데이트',
      '반응형 디자인',
    ],
  },
};

export const aboutContent = {
  name: 'About Me',
  introduction: '코드로 가치를 만드는 장찬희입니다.',
  background: [
    '서비스는 단순한 코드의 조합이 아니라, 사용자에게 가치를 전달하는 수단이라고 생각합니다.',
    '두 번의 프리랜서 프로젝트를 통해 비즈니스 요구사항을 분석하고 UI로 구현하는 과정을 익혔으며, React 기반의 웹 개발과 API 연동, 상태 관리 등의 경험을 쌓았습니다.',
    '개발자로서 코드를 통해 실질적인 가치를 제공하는 방법을 고민하며, 협업 과정에서는 원활한 커뮤니케이션을 통해 효율적인 개발을 지향하고있습니다.',
  ],
  contact: {
    email: 'chanhee.frontend@gmail.com',
    github: 'https://github.com/Rosevilleage',
    blog: 'https://velog.io/@cksgml1914',
  },
  skill: [
    'javascript',
    'typescript',
    'html',
    'css',
    'react',
    'styled-components',
    'axios',
  ],
  education: [
    {
      ago: '2022.12\n ~ \n2023.06',
      name: '코드스테이츠 프론트엔드 과정',
      description: [
        'Javascript 기반 프론트엔드 과정',
        'React 위주의 학습',
        '두 번의 팀프로젝트 진행',
      ],
    },
  ],
};
