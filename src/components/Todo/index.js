import React from "react";
import "./style.scss";

const Todo = ({ text, completed, toggleTodo, deleteTodo }) => {
  let cn = "todo";

  if (completed) cn += " todo--completed";

  return (
    <li className={cn}>
      <input
        type="checkbox"
        className="todo-toggle-btn"
        onChange={toggleTodo}
        checked={completed}
      />
      <p className="todo-text">{text}</p>
      <button className="todo-delete-btn" onClick={deleteTodo}>
        X
      </button>
    </li>
  );
};

export default Todo;
