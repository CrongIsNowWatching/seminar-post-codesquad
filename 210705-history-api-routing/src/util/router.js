import DetailPage from '../../../throttle-data-caching/caching/src/pages/DetailPage';

class Router {
    constructor({$target}) {
        this.$target = $target;
        this.entryPoints= {
            '/': null,
            '/main': null,
            "/detail": DetailPage
        }

        window.addEventListener('popstate', (e)=> {
            console.log(e); // {page: 컴포넌트키}
            new this.entryPoints[e.state.Page]({$target:this.$target, ROUTER:this});
        });
    }
    
    setPath([path, PageComponent]){
        this.entryPoints[path] = PageComponent;
    }
    //<Link to="/path" Componenet="">
    link(path) {
        const $Link = document.createElement('li');
        $Link.innerText = path; // 키로 접근=> /main => 
        $Link.addEventListener('click', ()=> {
           this.to(path); 
        })
        return $Link;
    }
    to(path, options=null) {
        // 히스토리 쌓기
        // 상태, 이름 , url
        // alert('dd');
        window.history.pushState({Page: path},"", path);
        if(!options) new this.entryPoints[path]({$target: this.$target, ROUTER: this});
        else new this.entryPoints[path]({$target: this.$target, ROUTER: this});
    }
    // 팝
    // window.addEventListener('', );

}
export default Router;