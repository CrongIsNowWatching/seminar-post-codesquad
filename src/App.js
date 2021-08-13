import "./App.scss";

import { TodoList } from './components/TodoList/';
import { TodoCreator } from './components/TodoCreator/';

import store from "./util/store/root.js";
import { initStore } from "./util/store/useStore.js";
import { useDispatch } from "./util/store/useStore.js";
import { addTodo } from "./util/actions/todos";


class App {
  constructor({$target}) {
    this.$target = $target;

    // components
    this.TodoCreator = null;
    this.TodoList = null;

    // context state
    this.store = null;
    
    this.init();
  }

  init() {
    this.store = store;
    initStore(store);

    const dispatch = useDispatch("todos");
    
    if (localStorage.getItem("todos")) {
      JSON.parse(localStorage.getItem("todos")).todos.forEach((todo) => {
        dispatch( addTodo({...todo}) );
      })
    }

    this.render();
  }

  render() {
    
    const $TodoCreator = document.createElement("div");
    $TodoCreator.className = "TodoCreator";
    this.TodoCreator = new TodoCreator({ $target: $TodoCreator });
    this.$target.append($TodoCreator);

    const $TodoList = document.createElement("div");
    $TodoList.className = "TodoList";
    this.TodoList = new TodoList({ $target: $TodoList });
    this.$target.append($TodoList);
  }

}

export default App;