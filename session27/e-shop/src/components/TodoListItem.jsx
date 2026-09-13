import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const TodoListItem = React.memo(function TodoListItem({
  todo,
  onToggle,
  onDelete,
}) {
  console.log("rendering Todolistitem component...");

  return (
    <ListGroup.Item
      key={todo.id}
      className="d-flex justify-content-between align-items-center"
    >
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>

      <Button
        onClick={() => onDelete(todo.id)}
        variant="outline-danger"
        size="sm"
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
});

export default TodoListItem;
