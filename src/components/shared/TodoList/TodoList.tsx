import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useTodoContext } from "../../../context/TodoContext";

const TodoList: React.FC = () => {
  const { state } = useTodoContext();
  const { todos, filter } = state;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.status;
    if (filter === "completed") return todo.status;
    return true;
  });

  if (todos.length === 0) {
    return <p className="text-muted-foreground mt-4 text-center">No tasks yet!</p>;
  }

  if (filteredTodos.length === 0) {
    return (
      <p className="text-muted-foreground mt-4 text-center">
        No tasks found for filter: <strong>{filter[0].toUpperCase() + filter.slice(1)}</strong>
      </p>
    );
  }

  return (
    <ul className="mt-4">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
