import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo, deleteTodo } from "../actions/todos";

const mapState = state => ({
  todos: state.todos
});

const mapDispatch = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapState,
  mapDispatch
)(TodoList);
