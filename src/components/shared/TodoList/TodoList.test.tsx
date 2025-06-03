import { describe, expect, it } from "vitest";
import { renderWithTodoProvider } from "../../../test/test-utils";
import { screen } from "@testing-library/react";

import TodoList from "./TodoList";
import type { TodoStateType } from "../../../types/todo";

describe("TodoList", () => {
  it("renders empty state when no todos exist", () => {
    const initialState: TodoStateType = { todos: [], filter: "all" };

    renderWithTodoProvider(<TodoList />, initialState);
    expect(screen.getByText("No tasks yet!")).toBeInTheDocument();
  });

  it("renders list of todos", () => {
    const initialState: TodoStateType = {
      todos: [
        { id: "sad1saf43d@", text: "Task 1", status: false },
        { id: "sdbds234512", text: "Task 2", status: true },
      ],
      filter: "all",
    };

    renderWithTodoProvider(<TodoList />, initialState);
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.queryByText("No tasks yet!")).not.toBeInTheDocument();
  });

  it("shows filtered empty state", () => {
    const initialState: TodoStateType = {
      todos: [{ id: "sad1saf43d@", text: "Active Task", status: false }],
      filter: "completed",
    };

    renderWithTodoProvider(<TodoList />, initialState);
    expect(screen.getByText(/No tasks found for filter:/)).toBeInTheDocument();
    expect(screen.getByText(/Completed/)).toBeInTheDocument();
  });

  describe("filtering todos", () => {
    const mockTodos = [
      { id: "sad1saf43d@", text: "Active Task", status: false },
      { id: "sdbds234512", text: "Completed Task", status: true },
    ];

    it("shows all todos when filter is 'all'", () => {
      const initialState: TodoStateType = {
        todos: mockTodos,
        filter: "all",
      };

      renderWithTodoProvider(<TodoList />, initialState);
      expect(screen.getByText("Active Task")).toBeInTheDocument();
      expect(screen.getByText("Completed Task")).toBeInTheDocument();
    });

    it("shows only active todos when filter is 'active'", () => {
      const initialState: TodoStateType = {
        todos: mockTodos,
        filter: "active",
      };

      renderWithTodoProvider(<TodoList />, initialState);
      expect(screen.getByText("Active Task")).toBeInTheDocument();
      expect(screen.queryByText("Completed Task")).not.toBeInTheDocument();
    });

    it("shows only completed todos when filter is 'completed'", () => {
      const initialState: TodoStateType = {
        todos: mockTodos,
        filter: "completed",
      };

      renderWithTodoProvider(<TodoList />, initialState);
      expect(screen.queryByText("Active Task")).not.toBeInTheDocument();
      expect(screen.getByText("Completed Task")).toBeInTheDocument();
    });
  });
});
