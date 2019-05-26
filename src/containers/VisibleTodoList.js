import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, deleteTodo, getTodos } from "../actions/todos";
import * as TodoActions from "../actions/todos";

const mapState = state => ({
  todos: state.todos
});

const mapDispatch = (dispatch, ownProps) => {
  return {
    toggleTodo: (id, prevCompleted) => dispatch(toggleTodo(id, prevCompleted)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    getTodos: () => dispatch(getTodos())
  };
};

export default connect(
  mapState,
  mapDispatch
)(TodoList);
