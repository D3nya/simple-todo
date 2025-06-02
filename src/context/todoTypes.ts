export type TodoType = {
  id: string;
  text: string;
  status: boolean;
};

export type TodoFilterType = "all" | "active" | "completed";

export type TodoStateType = {
  todos: TodoType[];
  filter: TodoFilterType;
};

export type TodoActionType =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "SET_FILTER"; payload: TodoFilterType }
  | { type: "CLEAR_COMPLETED" };
