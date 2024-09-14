kakao login시에 백엔드로부터 오는 response에 담긴 jwt와 유저 정보를 관리하기 위해서 next js의 api router를 활용해 httpOnly secure cookie로 변환하고 storage에 저장될 값들을 암호화 하여 관리하였습니다.

![img](/images/mealmoryPaint.png)

카카로 로그인으로 code를 받아 자체 api로 요청을 보낸 후 자체 api에서 백엔드로 로그인 요청후 받는 유저의 정보는 response body에 담고 토큰은 cookie로 저장해서 클라이언트에 전달하는 방식으로 구현했습니다.

이 과정에서 refeshToken은 httpOnly, secure 옵션을 적용해 클라이언트에서 javascript로 접근하지 못하도록 설정했습니다.

또한 accessToken 재발급등 인증 관련 요청을 자체 api에서 처리하도록 구현하여 클라이언트에서 refreshToken에 접근할 일이 없도록 설계했습니다.

body에 담겨오는 유저의 정보는 web crypto api를 통해서 AES-GCM 방식으로 암호화 하여 데이터 무결성을 확보하고, localStorage에 저장해 다른 페이지에서 사용할 수 있도록 구현했습니다.
