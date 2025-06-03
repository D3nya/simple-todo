import { describe, expect, it } from "vitest";
import TodoActions from "./TodoActions";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTodoProvider } from "../../../test/test-utils";
import { mockDispatch } from "../../../test/setupTests";
import type { TodoStateType } from "../../../types/todo";

describe("TodoActions", () => {
  it("disables clear button when no completed todos", () => {
    const initialState: TodoStateType = {
      todos: [{ id: "safsd!ef4z31", text: "Task 1", status: false }],
      filter: "all",
    };

    renderWithTodoProvider(<TodoActions />, initialState);

    const clearButton = screen.getByText("Clear completed");
    expect(clearButton).toBeDisabled();
  });

  it("enables clear button when there are completed todos", () => {
    const initialState: TodoStateType = {
      todos: [{ id: "safsd!ef4z31", text: "Task 1", status: true }],
      filter: "all",
    };

    renderWithTodoProvider(<TodoActions />, initialState);

    const clearButton = screen.getByText("Clear completed");
    expect(clearButton).toBeEnabled();
    expect(clearButton.className).toMatch(/text-destructive/);
  });

  it("dispatches CLEAR_COMPLETED action when button clicked", () => {
    const initialState: TodoStateType = {
      todos: [
        { id: "f123!saf1", text: "Task 1", status: true },
        { id: "2df3!@xfs", text: "Task 2", status: false },
      ],
      filter: "all",
    };

    renderWithTodoProvider(<TodoActions />, initialState);

    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLEAR_COMPLETED" });
  });
});
