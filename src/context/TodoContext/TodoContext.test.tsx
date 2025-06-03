import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useTodoContext } from "./TodoContext";
import { screen } from "@testing-library/react";
import { renderWithTodoProvider } from "../../test/test-utils";

describe("TodoContext", () => {
  it("throws error when used outside provider", () => {
    expect(() => {
      function TestComponent() {
        useTodoContext();
        return null;
      }
      render(<TestComponent />);
    }).toThrow("useTodoContext must be used within TodoProvider");
  });

  it("returns context when used inside provider", () => {
    function TestComponent() {
      const context = useTodoContext();
      return <div>{context ? "Context found" : "No context"}</div>;
    }

    renderWithTodoProvider(<TestComponent />);

    expect(screen.getByText("Context found")).toBeInTheDocument();
  });
});
