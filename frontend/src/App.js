const END_POINT = "http://localhost:3000/api";
const PATH = "/movies/41";

class App {
  constructor({ $target }) {
    this.$target = $target;
    this.state = { movieCard: null };

    this.setState({});
  }

  setState(){
    this.render();
  }

  async render(){
    // const jsonData = 


    const $MovieCardLayout = `
      <div class="movie-card">
        <img src="${jsonData.image}">
        <div class="movie-title">타이틀: ${jsonData.title}</div>
      </div>
    `;

    this.$target.insertAdjacentHTML('beforeend', $MovieCardLayout);
  }
}

export default App;