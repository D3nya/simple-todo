import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { initialState, todoReducer } from "./todoReducer";

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
