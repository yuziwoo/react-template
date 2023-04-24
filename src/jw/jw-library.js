export class JwLibrary {
    constructor() {
        this.device = ""; // mob, pc
        this.browser = ""; // Chorme, Firefox, Safari, Opera, Edge, Android, iPhone

        let body = document.getElementById("root");
        this.getBrowser();
        body.classList.add(`device-${this.device}`); // mob, pc 환경을 구분하여 root element에 class 추가
        // jw-pc, jw-mob 클래스를 이용하여 원하는 환경에서만 요소가 보일 수 있도록 작성해보세요.

        this.reset();
    }

    getBrowser() {
        let userAgent = navigator.userAgent;

        if (userAgent.match(/chrome|chromium|crios/i)) {
            this.browser = "Chrome";
        } else if (userAgent.match(/firefox|fxios/i)) {
            this.browser = "Firefox";
        } else if (userAgent.match(/safari/i)) {
            this.browser = "Safari";
        } else if (userAgent.match(/opr\//i)) {
            this.browser = "Opera";
        } else if (userAgent.match(/edg/i)) {
            this.browser = "Edge";
        } else if (userAgent.match(/android/i)) {
            this.browser = "Android";
        } else if (userAgent.match(/iphone/i)) {
            this.browser = "iPhone";
        } else {
            this.browser = "Unknown";
        }

        if (userAgent.match(/Android/i) || userAgent.match(/webOS/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPad/i) || userAgent.match(/iPod/i) || userAgent.match(/BlackBerry/i) || userAgent.match(/Windows Phone/i)) {
            this.device = "mob";
        } else {
            this.device = "pc";
        }
    }

    reset() {
        
    }

    cutText(text, limit) {
        if (text.length <= limit) {
            return text;
        } else {
            return text.slice(0, limit).trim() + "...";
        }
    }
}

