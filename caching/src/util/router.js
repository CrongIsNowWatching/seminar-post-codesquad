class Router {
  constructor({ $target }) {
    this.$target = $target;

    this.entryPoints = {
      "/": null,
      "/main": null,
      "/detail": null,
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

  to(path, options = null) {
    window.history.pushState({ Page: path }, "", path);
    if (!options) new this.entryPoints[path]({ $target: this.$target, ROUTER: this });
    else new this.entryPoints[path]({ $target: this.$target, ROUTER: this, options });
  }
}
export default Router;
