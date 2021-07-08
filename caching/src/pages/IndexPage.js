import Image from "/components/Image.js";

class IndexPage {
  // App.js에서 entry-point로 사용

  constructor({ $target, ROUTER }) {
    this.$target = $target;
    this.ROUTER = ROUTER;
    this.setState();
  }

  setState() {
    localStorage.removeItem("imageData");
    this.render();
  }

  render() {
    this.$target.innerHTML = "";

    const $Index = `
      <h1>인덱스 입니다.</h1>
      <ul id="links"></ul>
      <ul id="images"></ul>
    `;

    this.$target.insertAdjacentHTML("beforeend", $Index);

    this.didMount();
  }

  didMount() {
    this.$target.querySelector("ul#links").append(this.ROUTER.link("/main"));
    const $ul = this.$target.querySelector("ul#images");

    // 클릭 이벤트를 이미지에 건다
    // 이미 url, id를 알고있으니까

    $ul.addEventListener("click", (e) => {
      const $imageData = e.target.closest(".imageData");
      if (!$imageData) return;

      const options = { id: $imageData.dataset.id, url: $imageData.dataset.url };

      this.ROUTER.to("/detail", options);
    });

    new Image({ $ul });
  }
}

export default IndexPage;
