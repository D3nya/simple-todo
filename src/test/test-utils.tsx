import React from "react";
import { render } from "@testing-library/react";
import { mockDispatch } from "./setupTests";
import { TodoContext } from "../context/TodoContext/TodoContext";
import type { TodoStateType } from "../types/todo";

const defaultState: TodoStateType = {
  todos: [],
  filter: "all",
};

export function renderWithTodoProvider(ui: React.ReactElement, initialState: TodoStateType = defaultState) {
  return render(
    <TodoContext.Provider value={{ dispatch: mockDispatch, state: initialState }}>{ui}</TodoContext.Provider>
  );
}
