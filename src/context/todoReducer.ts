import { generateId } from "../lib/generateId";
import type { TodoActionType, TodoStateType } from "./todoTypes";

export const initialState: TodoStateType = {
  todos: [],
  filter: "all",
};

export function todoReducer(state: TodoStateType, action: TodoActionType): TodoStateType {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: generateId(), text: action.payload, status: false }],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, status: !todo.status } : todo)),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.status),
      };
    default:
      return state;
  }
}
