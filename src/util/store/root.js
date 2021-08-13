import createStore from "./createStore.js";

import todos from "../reducers/todos.js";

const reducers = { todos };

const store = {};

for (const reducer in reducers) {
  store[reducer] = createStore(reducers[reducer]);
}

export default store;