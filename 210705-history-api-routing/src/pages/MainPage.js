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
    alert("MainPage");
  }
}
export default MainPage;