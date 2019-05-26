import React from "react";
import Todo from "../Todo";
import "./style.scss";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todolist">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          toggleTodo={() => toggleTodo(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
