import React from "react";
import Todo from "../Todo";
import "./style.scss";

class TodoList extends React.Component {
  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;

    return (
      <ul className="todolist">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleTodo={() => toggleTodo(todo.id, todo.completed)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
