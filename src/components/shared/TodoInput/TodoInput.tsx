import React from "react";
import { Input } from "../../ui/input";

export const TodoInput: React.FC = () => {
  const [value, setValue] = React.useState("");

  return (
    <Input type="text" placeholder="What needs to be done?" value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export default TodoInput;
