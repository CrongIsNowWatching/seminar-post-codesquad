import IndexPage from "./pages/IndexPage.js"
import MainPage from './pages/MainPage.js';
import Router from "./util/router.js"
class App {
  constructor({ $target }) {
    this.$target = $target;
    this.ROUTER = new Router({$target});

    this.pages = {
      '/': IndexPage,
      '/main': MainPage
    }
    // this.pages['/']

    this.setState();
  }
  setState() {
    // this.render();
    for( const [path, Component] of Object.entries(this.pages)) {
      console.log(Component);
      this.ROUTER.setPath(
        [path, Component]
      )
    }
    this.render()
  }

  render() {
    this.ROUTER.to('/');
    // new IndexPage({$target:this.$target, ROUTER: this.ROUTER});
    // new MainPage({$target: this.$target})

  }
}

export default App;