import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: React.FC = () => {
  return (
    <ul className="mt-4">
      <TodoItem description="Some task" />
    </ul>
  );
};

export default TodoList;
