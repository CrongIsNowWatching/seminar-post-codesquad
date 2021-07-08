class IndexPage {
    constructor({$target, ROUTER}) {
        this.ROUTER = ROUTER;
        this.$target = $target;
        this.setState();
        // alert("index 입니다.");
    }
    setState(){
        this.render();
    }
    render(){
        // const $h2 = `<h2>하이2</h2>`;
        // this.$target.insertAdjacentHTML('beforeend', $h2);
        // const $h1 = document.createElement("h1");
        // $h1.innerText = "하이1";
        // this.$target.append($h1);

        // 처음 렌더할때 전체 갈아줘야함.
        this.$target.innerHTML = "";
        const $Index = `<h1>인덱스 입니다</h1>
                        <ul id="links"></ul>`;
        this.$target.insertAdjacentHTML("beforeend", $Index);
        this.didMount();
    }
    didMount() {
        // ul 태그에 링크 달아주기
        this.$target.querySelector("ul#links").append(this.ROUTER.link('/main'));
    }

}

export default IndexPage;