class DetailPage {
  constructor({ $target, ROUTER, options }) {
    this.$target = $target;
    this.ROUTER = ROUTER;
    this.id = options.id;
    this.url = options.url;
    this.setState();
  }

  setState() {
    this.render();
  }

  render() {
    this.$target.innerHTML = "";

    const $template = `
            <div>
                <p>${this.id}</p>
                <img src=${this.url} />
            </div>
        `;

    this.$target.insertAdjacentHTML("beforeend", $template);
  }
}

export default DetailPage;
