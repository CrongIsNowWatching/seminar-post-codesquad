import * as ACTION from "../enums/actions.js"

let id = 0;

const todos = (state, { type, payload }) => {
  
  switch(type) {
    case ACTION.ADD_TODO: 
      id = id + 1;
      if (Object.keys(state).length === 0 ) {
        localStorage.setItem("todos", JSON.stringify({todos: [{...payload, id: id}]}))
        return {
          todos: [{...payload, id: id}]
        }
      }
      localStorage.setItem("todos", JSON.stringify({todos: [...state.todos, {...payload, id: id}]}))
      return {
        todos: [
          ...state.todos,
          {...payload, id: id}
        ]
      }
    case ACTION.MODIFY_TODO: {
      
      const todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify({todos: [...todos]}))
      return {
        todos: [...todos]
      }
    }
    case ACTION.DELETE_TODO: {
      
      const todos = state.todos.filter((todo) => {
        return todo.id !== payload.id
      });
      
      localStorage.setItem("todos", JSON.stringify({todos: [...todos]}))
      return {
        todos: [...todos]
      }
    }
    default:
      console.er("error");
  }
}

export default todos;