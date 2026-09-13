export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todo: state.todo.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todo: state.todo.filter((todo) => !todo.completed),
      };
  }
}
