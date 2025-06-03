import { describe, it, expect } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import TodoInput from "./TodoInput";
import { renderWithTodoProvider } from "../../../test/test-utils";
import { mockDispatch } from "../../../test/setupTests";

describe("TodoInput", () => {
  it("renders input field and submit button", () => {
    renderWithTodoProvider(<TodoInput />);

    expect(screen.getByPlaceholderText("What needs to be done?")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });

  it("adds todo when valid input is submitted", () => {
    renderWithTodoProvider(<TodoInput />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "test task" } });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_TODO",
      payload: "test task",
    });

    expect(input).toHaveValue("");
  });

  it("trims input before dispatch", () => {
    renderWithTodoProvider(<TodoInput />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "   test task   " } });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_TODO",
      payload: "test task",
    });
  });

  it("shows alert and doesn't dispatch when trying to add empty todo", () => {
    renderWithTodoProvider(<TodoInput />);

    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(alert).toHaveBeenCalledWith("Please, enter something!");
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it("shows alert and doesn't dispatch when input contains only spaces", () => {
    renderWithTodoProvider(<TodoInput />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(alert).toHaveBeenCalledWith("Please, enter something!");
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it("shows alert and doesnt't dispatch when input more than 200 characters", () => {
    renderWithTodoProvider(<TodoInput />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    fireEvent.change(input, { target: { value: "a".repeat(201) } });
    fireEvent.click(screen.getByRole("button", { name: "Add" }));

    expect(alert).toHaveBeenCalledWith("Text must be less 200 characters!");
    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it("allows input of 200 characters", () => {
    renderWithTodoProvider(<TodoInput />);
    const input = screen.getByPlaceholderText("What needs to be done?");
    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.change(input, { target: { value: "a".repeat(200) } });
    fireEvent.click(button);

    expect(alert).not.toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
