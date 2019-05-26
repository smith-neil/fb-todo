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
          id: state.length + 1,
          completed: false,
          text: action.text
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
