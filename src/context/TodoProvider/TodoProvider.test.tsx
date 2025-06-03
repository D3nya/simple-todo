import { describe, expect, it } from "vitest";
import { renderWithTodoProvider } from "../../test/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoProvider, { STORAGE_KEY } from "./TodoProvider";
import { useTodoContext } from "../TodoContext/TodoContext";

const TestComponent = () => {
  const { state } = useTodoContext();
  return <div>{state.todos.length} todos</div>;
};

describe("TodoProvider", () => {
  it("renders children", () => {
    renderWithTodoProvider(<div>Test Child</div>);

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("should initialize with initialState when localStorage is empty", () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    expect(screen.getByText("0 todos")).toBeInTheDocument();
  });

  it("should initialize with saved state from localStorage", () => {
    const mockState = {
      todos: [
        { id: "21fDFA12sa@1", text: "Test todo 1", status: false },
        { id: "fsdaf@#12312", text: "Test todo 2", status: false },
        { id: "sdfgsdgsSAF1", text: "Test todo 3", status: false },
      ],
      filter: "all",
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockState));

    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    expect(screen.getByText("3 todos")).toBeInTheDocument();
  });

  it("should save state to localStorage when it changes", () => {
    const AddTodoComponent = () => {
      const { state, dispatch } = useTodoContext();
      return (
        <div>
          <button onClick={() => dispatch({ type: "ADD_TODO", payload: "Test todo" })}>Add Todo</button>
          <div>{state.todos.length} todos</div>
        </div>
      );
    };

    render(
      <TodoProvider>
        <AddTodoComponent />
      </TodoProvider>
    );

    expect(screen.getByText("0 todos")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Add Todo"));

    expect(screen.getByText("1 todos")).toBeInTheDocument();
    const savedState = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "");
    expect(savedState.todos).toHaveLength(1);
    expect(savedState.todos[0].text).toBe("Test todo");
  });
});
