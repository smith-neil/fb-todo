import React from "react";

const AddTodo = ({ addTodo }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        addTodo(input.value);
        input.value = "";
      }}
    >
      <input ref={node => (input = node)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
