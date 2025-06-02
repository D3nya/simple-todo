import React from "react";
import { Input } from "../../ui/input";
import { useTodoContext } from "../../../context/TodoContext";
import { Button } from "../../ui/button";

export const TodoInput: React.FC = () => {
  const [value, setValue] = React.useState("");
  const { dispatch } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedText = value.trim();

    if (!trimmedText) {
      alert("Please, enter something!");
      return;
    }

    if (trimmedText.length > 200) {
      alert("Text muse be less 200 characters!");
      return;
    }

    dispatch({ type: "ADD_TODO", payload: trimmedText });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
      <Input
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="default">
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
