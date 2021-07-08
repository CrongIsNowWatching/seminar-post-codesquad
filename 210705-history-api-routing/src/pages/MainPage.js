class MainPage {
    constructor({$target}) {
        this.$target = $target;
        this.setState();
        // alert("index 입니다.");
    }
    setState(){
        this.render();
    }
    render(){
    alert('메인');
        this.$target.innerHTML = '';
        const $h1 = document.createElement('h1');
        $h1.innerText = '메인페이지입니다.';
        this.$target.append($h1);
    }
    
}
export default MainPage;