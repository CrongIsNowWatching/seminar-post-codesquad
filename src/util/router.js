

class Router {
  constructor({ $target }) {
    this.$target = $target;
    
    this.entryPoints = {
      '/': null,
      '/main': null,
      '/sub': null,
    };

    this.setPath = ([path, PageComponent]) => {
      this.entryPoints[path] = PageComponent;
    }

    this.link = (path) => {
      const $Link = document.createElement("li");
      $Link.innerText = path;
      $Link.addEventListener("click", () => {
        console.log("link click", path);
        this.to(path);
      });

      return $Link;
    }
    this.to = (path) => {
      // const $PageComponent = JSON.stringify(new this.entryPoints[path]({ $target: this.$target, ROUTER: this }));
      window.history.pushState({PageComponent: path}, "", path);
      new this.entryPoints[path]({ $target: this.$target, ROUTER: this });
    }
  
    window.addEventListener("popstate", (event) => {
      // console.log(event)
      // const $PageComponent = JSON.parse(event.state.PageComponent);
      console.log("$PageComponent")
      new this.entryPoints[event.state.PageComponent]({ $target: this.$target, ROUTER: this });
      // new $PageComponent({ $target: this.$target, ROUTER: this });

    });
  
  }
}

export default Router;