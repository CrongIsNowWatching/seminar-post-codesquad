const END_POINT = "http://localhost:3000/api";
const PATH = "/movies/419";

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.state = { movieLists: null };

    this.setState({});
  }

  setState(){
    this.render();
  }

  async render(){
    const response = await fetch(`${END_POINT}${PATH}`);
    const jsonData = await response.json();

    const $MovieListLayout = `
      <div class="movie-card">
        <img src="${jsonData.image}">
        <div class="movie-title">타이틀: ${jsonData.title}</div>
      </div>
    `;

    this.$target.insertAdjacentHTML('beforeend', $MovieListLayout);



  }

}

export default App;