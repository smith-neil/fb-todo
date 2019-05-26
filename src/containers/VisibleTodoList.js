import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

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
