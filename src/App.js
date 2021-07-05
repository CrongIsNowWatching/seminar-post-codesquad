import IndexPage from './pages/IndexPage.js'
import MainPage from './pages/MainPage.js';
import SubPage from './pages/SubPage.js';

import Router from './util/router.js';

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.ROUTER = new Router({ $target: this.$target });
    
    this.pages = {
      '/': IndexPage,
      '/main': MainPage,
      '/sub': SubPage
    }

    this.setState();
  }
  setState() {
    for (const [path, Component] of Object.entries(this.pages)) {
      console.log(Component)
      this.ROUTER.setPath(
        [ path, Component ]
      );
    }
    console.log(this.ROUTER);

    this.render();
  }
  render() {
    console.warn("App render!");
    this.ROUTER.to("/");
    // new IndexPage({ $target: this.$target, ROUTER: this.ROUTER });
  }
}

export default App;