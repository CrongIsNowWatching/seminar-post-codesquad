## [Dico] 비동기 seminar 21.07.17
---

- 비동기 실습 세미나 진행을 위해 Apollo-cic 과제의 템플릿을 재사용하였습니다 🙂

---
- 실행법  
  1. 3000번 포트와 8080번 포트를 점유하고 있는 나의 다른 개발 프로젝트가 없는지 확인한다. 있다면 종료한다.  
  2. 백엔드 프로젝트의 폴더로 가서 `npm install`명령어로 백엔드와 프론트엔드 디펜던시를 설치한다.
  3. `npm start`명령어로 프론트 실행을 진행한다.

- 프론트엔드
  - 주의사항 : `frontend/public`에는 `index.html`, `index.css`, `index.js` 이외의 파일 및 디렉토리를 생성하지 않는다. 소스파일은 `frontend/public`이 아닌 곳에서 다루도록 한다.

- 백엔드 API
  - 참고 : 백엔드 API는 10%의 확률로 항상 에러를 리턴한다.
  - API의 리턴값은 구글드라이브를 통해 공유한 문서와 같다.
  - END_POINT : http://localhost:3000/api
  - API
    - GET /recommended-movies  
    - GET /movies-by-ids?ids=숫자,숫자,숫자
    - GET /movies/:id숫자  