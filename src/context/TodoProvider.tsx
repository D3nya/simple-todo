import React, { useEffect, useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { initialState, todoReducer } from "./todoReducer";

interface TodoProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = "todoAppState";

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, (initial) => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    return savedState ? JSON.parse(savedState) : initial;
  });

  // Save state
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Error:", e);
    }
  }, [state]);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
