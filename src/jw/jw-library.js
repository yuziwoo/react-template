export class JwLibrary {
    constructor() {
        this.device = ""; // mob, pc
        this.browser = ""; // Chorme, Firefox, Safari, Opera, Edge, Android, iPhone

        this.body = document.getElementById("root");

        this.getBrowser();
        this.body.classList.add(`device-${this.device}`);
        // mob, pc 환경을 구분하여 root element에 클래스 추가
        // jw-pc, jw-mob 클래스를 이용하여 원하는 환경에서만 요소가 보일 수 있도록 작성해보세요.

        this.body.classList.add(this.orientation);
        // 뷰포트의 방향에 따라 가로가 더 길면 landscape, 세로가 더 길면 portrait 클래스 추가

        // 스크롤, 리사이즈 이벤트 생성
        this.bindScroll = this.scroll.bind(this);
        this.bindResize = this.resize.bind(this);
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

        this.orientation = window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
    }

    resize() {
        if (window.innerWidth >= window.innerHeight) {
            if (this.orientation !== "landscape") {
                this.orientation = "landscape";
                this.body.classList.remove("portrait");
                this.body.classList.add("landscape");
            }
        } else {
            if (this.orientation !== "portrait") {
                this.orientation = "portrait";
                this.body.classList.remove("landscape");
                this.body.classList.add("portrait");
            }
        }
    }
    scroll() {
        //
    }
    // 라이프사이클
    onStart() {
        window.addEventListener("resize", this.bindResize);
        window.addEventListener("scroll", this.bindScroll);
    }

    onEnd() {
        window.removeEventListener("resize", this.bindResize);
        window.removeEventListener("scroll", this.bindScroll);
    }

    // 텍스트 편집 (텍스트, max 텍스트 길이)
    cutText(text, limit) {
        if (text.length <= limit) {
            return text;
        } else {
            return text.slice(0, limit).trim() + "...";
        }
    }

    // 남은 시간 구하기 (종료 시간, 시작 시간) / return {sec, min, hour, day};
    /*
    타이머 예시
    let timer = () => {
        setTimeout(() => {
            console.log(jw.limitTimer(new Date(2023, 5, 13, 12)));
            timer();
        }, 1000);
    }
    timer()
     */
    limitTimer(end, start = new Date()) {
        let base_sec = Math.floor((end - start) / 1000);
        let base_min = Math.floor(base_sec / 60);
        let base_hour = Math.floor(base_min / 60);
        let day = Math.floor(base_hour / 24);

        return {
            sec: base_sec % 60,
            min: base_min % 60,
            hour: base_hour % 24,
            day: day
        }
    }
}