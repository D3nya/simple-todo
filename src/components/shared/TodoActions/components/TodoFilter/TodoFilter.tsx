import React from "react";
import { Button } from "../../../../ui/button";
import { useTodoContext } from "../../../../../context/TodoContext/TodoContext";
import type { TodoFilterType } from "../../../../../types/todo";

const filters: TodoFilterType[] = ["all", "active", "completed"];

export const TodoFilter: React.FC = () => {
  const { state, dispatch } = useTodoContext();

  const activeFilter = state.filter;

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-2">
      {filters.map((filter) => (
        <Button
          type="button"
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          size="sm"
          onClick={() => dispatch({ type: "SET_FILTER", payload: filter })}
        >
          {filter[0].toUpperCase() + filter.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default TodoFilter;
