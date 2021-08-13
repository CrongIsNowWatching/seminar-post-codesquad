import * as ACTION from "../enums/actions.js"

const addTodo = (item) => {
  return { type: ACTION.ADD_TODO, payload: item }
}

const deleteTodo = (item) => {
  return { type: ACTION.DELETE_TODO, payload: item }
}

const modifyTodo = (item) => {
  return { type: ACTION.MODIFY_TODO, payload: item }
}

const completeTodo = (item) => {
  return { type: ACTION.COMPLETE_TODO, payload: item }
}

export { addTodo, deleteTodo, modifyTodo, completeTodo };