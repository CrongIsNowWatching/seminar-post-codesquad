
import TodoListPresenter from "./TodoListPresenter.js";

import { useSelector, useSubscribe, useDispatch } from "../../util/store/useStore.js";
import { addTodo, deleteTodo } from "../../util/actions/todos.js";

import * as ACTION from "../../util/enums/actions.js";

class TodoListContainer {
  constructor({ $target }) {
    this.$target = $target;

    // useContext
    this.subscribe = useSubscribe("todos");
    this.dispatch = useDispatch("todos");

    // state
    this.todos = useSelector((state) => state.todos.getState().todos);

    //components;
    this.TodoListPresenters = null;
    this.init();
  }
  
  init() {
    this.subscribe( ACTION.ADD_TODO, () => {
      this.setState({ 
        type: "add", 
        newTodos: useSelector((state) => state.todos.getState().todos)
      });
    });
    this.subscribe( ACTION.MODIFY_TODO, () => {
      this.setState({ 
        type: "modify", 
        newTodos: useSelector((state) => state.todos.getState().todos)
      });
    });

    this.subscribe( ACTION.DELETE_TODO, () => {
      this.setState({ 
        type: "delete", 
        newTodos: useSelector((state) => state.todos.getState().todos)  
      });
    });

    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos")).todos
    }
    this.render();
  }

  setState({ type, newTodos }) {
    switch (type) {
      case "add":
        this.todos = newTodos;
        this.render();
      return;
      case "modify":
        this.todos = newTodos;
        this.render();
      return;
      case "delete":
        this.todos = newTodos;
        this.render();
      return;
      default:
        break;
    }
    this.render();
  }
  

  render() {
    this.$target.innerHTML = "";
    this.TodoListPresenter = new TodoListPresenter({$target: this.$target, todos: this.todos});
  }

}

export default TodoListContainer;