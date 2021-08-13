
import { Todo } from "../Todo/";

class TodoListPresenter {
  constructor(props){
    
    this.render(props);
  }
  
  render({ $target, todos }){
    
    
    if (todos) {
      todos.forEach((todo) => {
        new Todo({$target: $target, todo: todo});
      })
    }
    
    
  }
}

export default TodoListPresenter;