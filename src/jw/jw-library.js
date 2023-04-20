export class JwLibrary {
    constructor() {
        this.device = ""; // mobile, pc
        this.browser = ""; // Chorme, Firefox, Safari, Opera, Edge, Android, iPhone
        this.getBrowser();

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
            this.device = "mobile";
        } else {
            this.device = "pc";
        }
    }
}

