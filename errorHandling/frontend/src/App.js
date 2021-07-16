import MainPage from './pages/MainPage.js';
class App {
    constructor({$target}) {
        this.$target = $target;
        this.setState();
    }
    setState() {
        this.render()
    }
    render() {
        new MainPage({$target: this.$target})
    }
}
export default App;
