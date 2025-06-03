import React from "react";
import { Button } from "../../ui/button";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import { useTodoContext } from "../../../context/TodoContext/TodoContext";

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
        aria-label="Clear completed tasks"
      >
        Clear completed
      </Button>
    </div>
  );
};

export default TodoActions;
