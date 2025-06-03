import { describe, expect, it } from "vitest";
import { initialState, todoReducer } from "./todoReducer";
import type { TodoActionType, TodoStateType } from "../../types/todo";

describe("todoReducer", () => {
  it("should handle ADD_TODO", () => {
    const action: TodoActionType = { type: "ADD_TODO", payload: "Test task" };
    const newState = todoReducer(initialState, action);

    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].text).toBe("Test task");
    expect(newState.todos[0].status).toBe(false);
    expect(newState.todos[0].id).toBeDefined();
  });

  it("should handle TOGGLE_TODO", () => {
    const state: TodoStateType = {
      todos: [{ id: "2131sad3!@", text: "Test task", status: false }],
      filter: "all",
    };

    const action: TodoActionType = { type: "TOGGLE_TODO", payload: "2131sad3!@" };
    const newState = todoReducer(state, action);

    expect(newState.todos[0].status).toBe(true);
  });

  it("should handle DELETE_TODO", () => {
    const state: TodoStateType = {
      todos: [{ id: "2131sad3!@", text: "Test task", status: false }],
      filter: "all",
    };

    const action: TodoActionType = { type: "DELETE_TODO", payload: "2131sad3!@" };
    const newState = todoReducer(state, action);

    expect(newState.todos).toHaveLength(0);
  });

  it("should handle SET_FILTER", () => {
    const action: TodoActionType = { type: "SET_FILTER", payload: "active" };
    const newState = todoReducer(initialState, action);

    expect(newState.filter).toBe("active");
  });

  it("should handle CLEAR_COMPLETED", () => {
    const state: TodoStateType = {
      todos: [
        { id: "2131sad3!@", text: "Test task 1", status: true },
        { id: "asfdsfaAS1", text: "Test task 2", status: false },
      ],
      filter: "all",
    };

    const action: TodoActionType = { type: "CLEAR_COMPLETED" };
    const newState = todoReducer(state, action);

    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0].id).toBe("asfdsfaAS1");
  });
});
