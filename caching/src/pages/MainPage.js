class MainPage {
  constructor({ $target }) {
    this.$target = $target;
    this.setState();
  }

  setState() {
    this.render();
  }

  render() {
    this.$target.innerHTML = "";
    const $h1 = document.createElement("h1");
    $h1.innerText = "메인페이지 입니다.";

    this.$target.append($h1);
  }
}

export default MainPage;
