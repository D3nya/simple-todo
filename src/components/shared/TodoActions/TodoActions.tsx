import React from "react";
import { Button } from "../../ui/button";
import TodoFilter from "./components/TodoFilter";
import { useTodoContext } from "../../../context/TodoContext";
import TodoCounter from "./components/TodoCounter";

const TodoActions: React.FC = () => {
  const { state, dispatch } = useTodoContext();

  const activeTodosCount = state.todos.filter((todo) => !todo.status).length;

  const hasCompleted = state.todos.some((t) => t.status);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-muted-foreground px-4 py-3 bg-muted shadow rounded-xl w-full">
      <TodoCounter activeTodosCount={activeTodosCount} />

      <TodoFilter />

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-destructive"
        title="Clear all completed tasks"
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        disabled={!hasCompleted}
      >
        Clear completed
      </Button>
    </div>
  );
};

export default TodoActions;
