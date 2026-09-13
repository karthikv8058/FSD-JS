const TODO_FILTER = ["All", "active", "completed"];
const TODO_TYPES = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  CLEAR_COMPLETED: "CLEAR_COMPLETED",
  SET_FILTER: "SET_FILTER",
};

const TODO_INITIAL_STATE = {
  todo: [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build UI", completed: true },
  ],
  filter: "All",
};

export { TODO_FILTER, TODO_INITIAL_STATE, TODO_TYPES };
