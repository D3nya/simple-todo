import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TodoCounter from "./TodoCounter";

describe("TodoCounter", () => {
  it("renders 0 items correctly", () => {
    render(<TodoCounter activeTodosCount={0} />);
    expect(screen.getByText("0 items left")).toBeInTheDocument();
  });

  it("renders correct count with 'item' for singular", () => {
    render(<TodoCounter activeTodosCount={1} />);
    expect(screen.getByText("1 item left")).toBeInTheDocument();
  });

  it("renders correct count with 'items' for plural", () => {
    render(<TodoCounter activeTodosCount={5} />);
    expect(screen.getByText("5 items left")).toBeInTheDocument();
  });
});
