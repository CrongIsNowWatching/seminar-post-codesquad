class Router {
  constructor({ $target }) {
    this.$target = $target;

    this.entryPoints = {
      "/": null,
      "/main": null,
    };

    window.addEventListener("popstate", (e) => {
      new this.entryPoints[e.state.Page]({ $target: this.$target, ROUTER: this });
    });
  }

  setPath([path, pageComponent]) {
    this.entryPoints[path] = pageComponent;
  }

  link(path) {
    const $Link = document.createElement("li");
    $Link.innerText = path;
    $Link.addEventListener("click", () => {
      this.to(path);
    });

    return $Link;
  }

  to(path) {
    window.history.pushState({ Page: path }, "", path);
    new this.entryPoints[path]({ $target: this.$target, ROUTER: this });
  }
}
export default Router;
