import React, { useCallback, useMemo, useReducer, useState } from "react";
import { Button, Form, FormLabel, ListGroup } from "react-bootstrap";
import TodoListItem from "./TodoListItem";
import { todoReducer } from "../reducers/todoReducer";
import {
  TODO_FILTER,
  TODO_INITIAL_STATE,
  TODO_TYPES,
} from "../utils/constants";

// useReducer, useMemo, useCallback, React.memo,

function TodoList() {
  const [todoItem, setTodoItem] = useState("");

  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(todoReducer, TODO_INITIAL_STATE);

  const filteredTodoList = useMemo(() => {
    if (state.filter === TODO_FILTER[1]) {
      return state.todo.filter((todo) => !todo.completed);
    }
    if (state.filter === TODO_FILTER[2]) {
      return state.todo.filter((todo) => todo.completed);
    }
    return state.todo;
  }, [state.todo, state.filter]);

  const handleAdd = () => {
    if (!todoItem.trim()) return;
    dispatch({
      type: TODO_TYPES.ADD_TODO,
      payload: todoItem.trim(),
    });
    setTodoItem("");
  };

  const handleDelete = useCallback((id) => {
    dispatch({
      type: TODO_TYPES.DELETE_TODO,
      payload: id,
    });
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({
      type: TODO_TYPES.TOGGLE_TODO,
      payload: id,
    });
  }, []);

  const handleFilter = (filter) => {
    dispatch({
      type: TODO_TYPES.SET_FILTER,
      payload: filter,
    });
  };

  const handleClearCompleted = () => {
    dispatch({
      type: TODO_TYPES.CLEAR_COMPLETED,
    });
  };

  return (
    <div className="p-3 m-auto mt-5" style={{ maxWidth: "500px" }}>
      <Form className="d-flex gap-2 mb-3">
        <Form.Control
          type="text"
          placeholder="Add a todo"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <Button onClick={handleAdd} variant="primary">
          Add
        </Button>
      </Form>

      <div className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          {TODO_FILTER.map((filter) => (
            <Button
              onClick={() => handleFilter(filter)}
              key={filter}
              variant="outline-secondary"
              size="sm"
              className="me-2"
            >
              {filter}
            </Button>
          ))}
        </div>

        <Button
          onClick={handleClearCompleted}
          variant="outline-danger"
          size="sm"
        >
          Clear completed
        </Button>
      </div>

      <ListGroup>
        {filteredTodoList.length > 0 &&
          filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              onDelete={handleDelete}
              onToggle={handleToggle}
              todo={todo}
            />
          ))}
      </ListGroup>
      <Button onClick={() => setCount(count + 1)}>Update count</Button>
      <h2>{count}</h2>
    </div>
  );
}

export default TodoList;
