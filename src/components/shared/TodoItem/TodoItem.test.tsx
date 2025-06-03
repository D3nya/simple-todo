import { describe, expect, it } from "vitest";
import { renderWithTodoProvider } from "../../../test/test-utils";
import TodoItem from "./TodoItem";
import { fireEvent, screen } from "@testing-library/react";
import { mockDispatch } from "../../../test/setupTests";

describe("TodoItem", () => {
  it("renders todo item correctly", () => {
    const mockTodo = {
      id: "21sa@d2gc123",
      text: "Test todo",
      status: false,
    };

    renderWithTodoProvider(<TodoItem todo={mockTodo} />);

    expect(screen.getByText("Test todo")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("shows checked checkbox when todo is completed", () => {
    const mockTodo = {
      id: "21sa@d2gc123",
      text: "Test todo",
      status: true,
    };

    renderWithTodoProvider(<TodoItem todo={mockTodo} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
    expect(screen.getByText("Test todo")).toHaveClass("line-through");
  });

  it("dispatches TOGGLE_TODO action when checkbox is clicked", () => {
    const mockTodo = {
      id: "21sa@d2gc123",
      text: "Test todo",
      status: false,
    };

    renderWithTodoProvider(<TodoItem todo={mockTodo} />);

    fireEvent.click(screen.getByRole("checkbox"));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      payload: "21sa@d2gc123",
    });
  });

  it("dispatches DELETE_TODO action when delete button is clicked", () => {
    const mockTodo = {
      id: "21sa@d2gc123",
      text: "Test todo",
      status: false,
    };

    renderWithTodoProvider(<TodoItem todo={mockTodo} />);

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "DELETE_TODO",
      payload: "21sa@d2gc123",
    });
  });

  it("applies correct styles for completed todo", () => {
    const mockTodo = {
      id: "21sa@d2gc123",
      text: "Test todo",
      status: true,
    };

    renderWithTodoProvider(<TodoItem todo={mockTodo} />);
    const textElement = screen.getByText("Test todo");

    expect(textElement).toHaveClass("line-through");
    expect(textElement).toHaveClass("text-muted-foreground");
  });
});
