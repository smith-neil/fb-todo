import React from "react";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";
import { addTodo } from "../actions/todos";

const mapDispatch = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatch
)(AddTodo);
