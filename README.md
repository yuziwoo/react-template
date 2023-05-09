# React-Template

### 다양한 리엑트 프로젝트 개발을 위한 템플릿입니다. :butterfly:
<br>


> ### ✅ 목표
> - JS 라이브러리를 개발하여 React 프로젝트에서 유용하게 사용할 수 있습니다.
> - 다양한 동적 표현들을 Jquery를 포함한 타 라이브러리 없이 Vanila 코드로 제작하여 속도를 향상 시킵니다.
> - 여러 프로젝트를 개발할때 템플릿을 사용하여 빠르게 기초 작업을 스킵할 수 있습니다.


> ### ✅ 내용
> 0. "react": "^18.2.0", "react-dom": "^18.2.0"
> 1. src/css/reset.css 파일에서 기본 초기화를 진행하였습니다.
> 2. src/js/jw-library.js 파일에서 class JwLibrary를 export하고 있습니다.
> 3. 컨텐츠를 재랜더링하게되면 dispatch(resetJW()); 해주세요.


> ### 설치된 라이브러리
> 1. npm install react-router-dom@6
> 2. npm install @reduxjs/toolkit react-redux
> 3. npm install axios
> 4. typescript npm install --save typescript @types/node @types/react @types/react-dom @types/jest

<br>

## 기본 컴포넌트 :cookie:
1. **Header**
- URL 첫번째 path에 반응하는 Header가 추가되어 있습니다.

<br><br>

## 기능. Property :cookie:
1. **클라이언트의 접속 환경을 확인합니다.**
- HTML root Element에 `device-pc, device-mob` 클래스가 적용되며, 화면의 orientation에 따라서 "landscape", "portrait" 클래스가 적용됩니다.
> - `jw-pc, jw-mob` 클래스를 이용하면 원하는 환경에서만 요소가 보입니다.
```javascript
// 사용 예시
console.log(jw.device); // mobile, pc
console.log(jw.browser); // Chorme, Firefox, Safari, Opera, Edge, Android, iPhone
console.log(jw.orientation); // landscpae(가로), portrait(세로)
```

<br>

2. **반응형 사이즈 CSS 규정.**
- PC : max-width: 1920px; min-width: 768px;
- MOB : max-width: 1080px;
- PC 디자인은 1920px 기준이며 1rem을 12px로 지정하였습니다.
- MOB 디자인은 1080px 기준이며 1rem을 12px로 지정하였습니다. 
- 즉, 디자인상 1080px에서 48px의 폰트 크기를 가졌다면 4rem으로 설정해주세요.

<br><br>

## 기능. Method :cookie:
1. **cutText(텍스트, 글자 수)**
- 텍스트의 글자 수에 리밋을 두고, 초과되는 값은 ...으로 바꾸어 리턴합니다.
```javascript
// 사용 예시
let name = "동해물과 백두산이 마르고 닳도록";
console.log(cutText(name, 10)); // == 동해물과 백두산이...
```

<br><br>

## 기능. CSS - 1. Text :cookie:
1. **.line-clamp**
- 텍스트를 몇 줄까지 표시할지를 정합니다. 초과되는 값은 ...으로 바뀌어 표현됩니다.
- .line-clamp1 .line-clamp2 ~ .line-clamp5 까지 있습니다.
```css
/* CSS 내용 */
 .line-clamp2 {
    width: 100%;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
```
```html
<!-- 적용 예시 -->
<p class="line-clamp2">동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세</p>
```

<br><br>

## 기능. CSS - 2. Animation :cookie:
1. **animation-hue**
- filter: hue-rotate 애니메이션 입니다.
```css
/* CSS 내용 */
 .animation-hue {
    animation: bg-hue-animation 10s infinite;
}

@keyframes bg-hue-animation {
    0% {
        filter: hue-rotate(0deg)
    }
    50% {
        filter: hue-rotate(180deg)
    }
    100% {
        filter: hue-rotate(0deg)
    }
}
```