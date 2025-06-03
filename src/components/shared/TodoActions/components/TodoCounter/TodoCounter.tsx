import React from "react";

interface TodoCounterProps {
  activeTodosCount: number;
}

export const TodoCounter: React.FC<TodoCounterProps> = ({ activeTodosCount }) => {
  return (
    <span className="inline-block min-w-20">
      {activeTodosCount} {activeTodosCount === 1 ? "item" : "items"} left
    </span>
  );
};

export default TodoCounter;
