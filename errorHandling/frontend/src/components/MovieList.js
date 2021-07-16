
import {entryPiont} from "../../util/util.js";
class MovieList {
    constructor({$target, $movies}) {
        this.$target = $target;
        this.$movies = $movies;
        this.state = null;
        this.setState()
    }
    setState() {
        this.setMovies();
    }
   async setMovies() {
        const data = await this.request('/recommended-movies');
        this.state = data;
        this.state.forEach((info, index)=> {
            this.render(info, index)
        });

    }
    request(endPoint) {

    }
    render(info, index) {
        const $movieList = `<div>
        <div>${info.title}</div>
        <div id="movieInfo-${index}" class="movieUL"></div>
        </div>`
        this.$target.insertAdjacentHTML('beforeend', $movieList);
    }
}
export default MovieList;
