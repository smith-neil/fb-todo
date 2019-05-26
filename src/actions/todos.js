import uuidv4 from "uuid/v4";

import { todosRef } from "../utils/firebase";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const GET_TODOS = "GET_TODOS";

export const addTodo = text => async dispatch => {
  const id = uuidv4();
  todosRef
    .doc(id)
    .set({
      completed: false,
      text
    })
    .then(() => {
      dispatch({
        type: ADD_TODO,
        id,
        text
      });
    });
};

export const deleteTodo = id => async dispatch => {
  todosRef
    .doc(id)
    .delete()
    .then(() => {
      dispatch({
        type: DELETE_TODO,
        id
      });
    });
};

export const toggleTodo = (id, prevCompleted) => async dispatch => {
  let todoRef = todosRef.doc(id);

  todoRef
    .update({
      completed: !prevCompleted
    })
    .then(() => {
      dispatch({
        type: TOGGLE_TODO,
        id
      });
    });
};

export const getTodos = () => async dispatch => {
  todosRef.get().then(snapshot => {
    let todos = [];
    snapshot.forEach(doc => {
      let todo = doc.data();
      todo.id = doc.id;
      todos.push(todo);
    });

    dispatch({
      type: GET_TODOS,
      todos
    });
  });
};
