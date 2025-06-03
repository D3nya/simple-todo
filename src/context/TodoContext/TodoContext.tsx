import { createContext, useContext } from "react";
import type { TodoActionType, TodoStateType } from "../../types/todo";

export const TodoContext = createContext<{
  state: TodoStateType;
  dispatch: React.Dispatch<TodoActionType>;
} | null>(null);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within TodoProvider");
  }
  return context;
};
