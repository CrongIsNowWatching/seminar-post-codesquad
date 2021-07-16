import MovieList from '../components/MovieList.js';
class MainPage {
    constructor({$target}) {
        this.$target = $target;
        this.setState()
    }
    setState() {
        this.render();
    }
    render() {
        const $contents = `<div>오늘의 영화 추천</div>
        <ul id="movies"></ul>`
        this.$target.insertAdjacentHTML('beforeend', $contents);
        this.didMount();
    }
    didMount() {
        const $movies =this.$target.querySelector('ul#movies');
        new MovieList({$target: this.$target, $movies})
    }
}
export default MainPage;