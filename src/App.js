import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

import rootReducer from "./reducers";

const state = {
  todos: []
};

const store = createStore(
  rootReducer,
  state,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
      </Provider>
    );
  }
}

export default App;
