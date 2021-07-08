class IndexPage {
  // App.js에서 entry-point로 사용

  constructor({ $target, ROUTER }) {
    this.$target = $target;
    this.ROUTER = ROUTER;
    this.setState();
  }

  setState() {
    this.render();
  }

  render() {
    /*
    // 1.
    const $h1 = document.createElement("h1"); // DOM
    $h1.innerText = "해위~1";
    this.$target.append($h1);

    // 2.
    const $h2 = `
        <h2>해위~2</h2>
    `; // typeof $h2 === string
    this.$target.insertAdjacentHTML("beforeend", $h2); // DOM
  */

    // 처음 렌더할 때 갈아줘야 함
    this.$target.innerHTML = "";

    const $Index = `
      <h1>인덱스 입니다.</h1>
      <ul id="links"></ul>
    `;

    this.$target.insertAdjacentHTML("beforeend", $Index);

    // 다음 처리
    this.didMount();
  }

  didMount() {
    // ul 태그에 링크 달아주기

    this.$target.querySelector("ul#links").append(this.ROUTER.link("/main"));
  }
}

export default IndexPage;
