class App {
  constructor({ $target }) {
    this.setState();
  }
  setState() {
    this.render();
  }
  render() {
    alert("App render!");
  }
}

export default App;