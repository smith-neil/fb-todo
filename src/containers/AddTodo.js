import React from "react";
import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";

const addTodo = text => ({
  type: "ADD_TODO",
  text
});

const mapDispatch = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatch
)(AddTodo);
