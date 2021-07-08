import DetailPage from "./pages/DetailPage.js";
import IndexPage from "./pages/IndexPage.js";
import MainPage from "./pages/MainPage.js";
import Router from "./util/router.js";

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.ROUTER = new Router({ $target });

    this.pages = {
      "/": IndexPage,
      "/main": MainPage,
      "/detail": DetailPage,
    };

    this.setState();
  }

  setState() {
    for (const [path, pageComponent] of Object.entries(this.pages)) {
      this.ROUTER.setPath([path, pageComponent]);
    }

    this.render();
  }

  render() {
    this.ROUTER.to("/");
  }
}

export default App;
