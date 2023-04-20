# react-template
 react-template with library

## 다양한 리엑트 프로젝트 개발을 위한 템플릿 프로젝트입니다. :butterfly:

> ### 목표
> - JS 라이브러리를 개발하여 React 프로젝트에서 유용하게 사용할 수 있습니다.
> - 다양한 동적 표현들을 Jquery를 포함한 타 라이브러리 없이 Vanila 코드로 제작하여 속도를 향상 시킵니다.
> - 여러 프로젝트를 개발할때 템플릿을 사용하여 빠르게 기초 작업을 스킵할 수 있습니다.

> ### 내용
> 1. src/css/reset.css 파일에서 기본 초기화를 진행하였습니다.
> 2. src/js/jw-library.js 파일에서 class JwLibrary를 export하고 있습니다.
> 3. 라이브러리 사용을 위해 변수에 new JwLibrary()를 생성하여 시작해주세요. (기본값: window.jw = new JwLibrary();)


 ### 기능 :cookie:
 1. **클라이언트의 접속 환경을 확인합니다.**
```
console.log(jw.device); // mobile, pc
console.log(jw.browser); // Chorme, Firefox, Safari, Opera, Edge, Android, iPhone
```
