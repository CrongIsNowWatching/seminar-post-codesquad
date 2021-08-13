import TodoCreatorPresenter from './TodoCreatorPresenter.js';

import { useDispatch } from "../../util/store/useStore.js";
import { addTodo } from "../../util/actions/todos";

class TodoCreatorContainer {
  constructor({ $target }) {
    this.$target = $target;
    
    // for context state
    this.dispatch = null;

    // state
    this.state = {};

    // component
    this.TodoCreatorPresenter = null;
    
    this.init();
  }
  
  init() {
    this.dispatch = useDispatch("todos");
    this.render();
  }
  
  handleSubmit() { 
    if (!this.state.description) {
      alert("할일 칸은 필수 입력입니다.");
      return;
    }
    this.dispatch( addTodo({...this.state}) );
  }

  handleChange({ target }) {
    this.setState({
      type: target.id, 
      payload: target.value
    })
  }

  setState({type, payload}) {
    this.state[type] = payload;
  }

  render() {
    this.$target.innerHTML = "";
    
    this.TodoCreatorPresenter = new TodoCreatorPresenter({
      $target: this.$target,
      handleSubmit: this.handleSubmit.bind(this),
      handleChange: this.handleChange.bind(this)
    });
    
  }
  

}

export default TodoCreatorContainer;