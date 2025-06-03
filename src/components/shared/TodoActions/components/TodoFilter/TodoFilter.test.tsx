import { describe, expect, it } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import TodoFilter from "./TodoFilter";
import { renderWithTodoProvider } from "../../../../../test/test-utils";
import { mockDispatch } from "../../../../../test/setupTests";
import type { TodoStateType } from "../../../../../types/todo";

describe("TodoFilter", () => {
  it("renders all filter buttons", () => {
    renderWithTodoProvider(<TodoFilter />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });

  it("displays active filter with correct variant", () => {
    const initialState: TodoStateType = {
      todos: [],
      filter: "active",
    };

    renderWithTodoProvider(<TodoFilter />, initialState);

    const allButton = screen.getByText("All");
    const activeButton = screen.getByText("Active");
    const completedButton = screen.getByText("Completed");

    expect(activeButton.className).toMatch(/bg-primary/);
    expect(activeButton.className).toMatch(/text-primary-foreground/);

    expect(allButton.className).toMatch(/border/);
    expect(allButton.className).toMatch(/bg-background/);
    expect(completedButton.className).toMatch(/border/);
    expect(completedButton.className).toMatch(/bg-background/);
  });

  it("changes active filter when clicked", async () => {
    const initialState: TodoStateType = {
      todos: [],
      filter: "all",
    };

    renderWithTodoProvider(<TodoFilter />, initialState);

    const completedButton = screen.getByText("Completed");

    fireEvent.click(completedButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_FILTER",
      payload: "completed",
    });
  });
});
