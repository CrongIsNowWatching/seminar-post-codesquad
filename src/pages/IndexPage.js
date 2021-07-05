class IndexPage {
  constructor({ $target, ROUTER }) {
    this.$target = $target;
    this.ROUTER = ROUTER
    this.setState();
  }
  setState() {
    this.render();
  }
  render() {
    this.$target.innerHTML = "";
    
    const $Index = /* html */`
      <h1>Index 입니다</h1><br>
      <ul id="links"></ul>
    `
    this.$target.insertAdjacentHTML('beforeend', $Index);
    this.mounted();
  }

  mounted() {
    
    this.$target.querySelector("ul#links").append(
      this.ROUTER.link("/main")
    );
    this.$target.querySelector("ul#links").append(
      this.ROUTER.link("/sub")
    );
    
    console.warn("INDEX MOUNTED");
  }
}
export default IndexPage;