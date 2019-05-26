import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

import rootReducer from "./reducers";

const todos = {
  todos: [
    {
      id: 1,
      text: "First todo",
      completed: true
    },
    {
      id: 2,
      text: "Second todo",
      completed: false
    }
  ]
};

const store = createStore(rootReducer, todos);

const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <VisibleTodoList todos={todos} />
    </Provider>
  );
};

export default App;
