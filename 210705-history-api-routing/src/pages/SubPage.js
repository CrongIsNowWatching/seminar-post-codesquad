class SubPage {
  constructor({ $target }) {
    this.$target = $target;
    this.setState();
  }
  setState() {
    this.render();
  }
  render() {
    this.$target.innerHTML = "";
    alert("SubPage");
  }
}
export default SubPage;