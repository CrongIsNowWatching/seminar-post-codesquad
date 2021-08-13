import { useDispatch } from "../../util/store/useStore.js";
import { deleteTodo, modifyTodo } from "../../util/actions/todos.js";

import TodoPresenter from "./TodoPresenter.js";

class TodoContainer {
  constructor({$target, todo}) {
    this.$target = $target;
    this.$self = null;
    
    this.dispatch = null;
    this.state = {...todo};
    
    // components
    this.TodoPresenter = null;

    this.init();
  }
  init() {
    this.dispatch = useDispatch("todos");
    this.render();
  }

  setState({type, evt, payload}) {
    switch (type) {
      case "modify-start":
        this.state.isModifing = true;
        this.$self.innerHTML = "";
        this.TodoPresenter.modifierRender({
          todo: this.state,
          handleModify: this.handleModify.bind(this),
          handleChange: this.handleChange.bind(this)
        })
        return;
      case "modify-end":
        this.state.isModifing = false;
        this.$self.innerHTML = "";
        this.TodoPresenter.render({
          todo: this.state,
          handleModify: this.handleModify.bind(this)
        });
        this.dispatch( modifyTodo({...this.state}) );
        return;
      case "delete":
        this.dispatch( deleteTodo({...this.state}) );
        return;
      case "is-done":
        this.state.isDone = evt.target.checked;
        this.$self.innerHTML = "";
        if (this.state.isDone) {
          this.TodoPresenter.doneRender({
            todo: this.state,
            handleModify: this.handleModify.bind(this)
          });
          this.dispatch( modifyTodo({...this.state}) );
          
        } else {
          this.TodoPresenter.render({
            todo: this.state,
            handleModify: this.handleModify.bind(this)
          });
          this.dispatch( modifyTodo({...this.state}) );
        }
        return;
        
      default:
        this.state[type] = payload;
        
        return;
    }
  }

  handleModify(type, evt) {
    this.setState({type: type, evt: evt});
  }

  handleChange({ target }) {
    
    this.setState({
      type: target.id, 
      payload: target.value
    })
  }

  handleSubmit() {
    this.setState({type: type});
  }
  render(){
    
    const $TodoPresenter = document.createElement("div");
    $TodoPresenter.className = "Todo";
    this.$self = $TodoPresenter;
    this.TodoPresenter = new TodoPresenter({
      $target: $TodoPresenter,
      todo: this.state,
      handleModify: this.handleModify.bind(this)
    });
    this.$target.append(this.$self);
  }

}

export default TodoContainer;