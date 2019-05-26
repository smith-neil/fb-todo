const todos = (state = [], action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          completed: false,
          text: action.text
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "GET_TODOS":
      return [...state, ...action.todos];
    default:
      return state;
  }
};

export default todos;
