import React from "react";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { Separator } from "../../ui/separator";
import { cn } from "../../../lib/utils";
import { useTodoContext } from "../../../context/TodoContext/TodoContext";
import type { TodoType } from "../../../types/todo";

interface TodoItemProps {
  todo: TodoType;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo: { id, status, text } }) => {
  const { dispatch } = useTodoContext();

  return (
    <li className="py-2 my-2">
      <div className="flex justify-between items-center gap-x-2">
        <Checkbox
          className="size-6"
          checked={status}
          aria-label={status ? "Mark todo as incomplete" : "Mark todo as complete"}
          onCheckedChange={() => dispatch({ type: "TOGGLE_TODO", payload: id })}
        />
        <div>
          <p
            className={cn(
              "leading-7 transition-all duration-400 ease-in-out",
              status && "line-through text-muted-foreground"
            )}
          >
            {text}
          </p>
        </div>
        <Button
          type="button"
          size="icon"
          variant="destructive"
          className="size-6"
          aria-label="Delete todo"
          onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
        >
          <X className="size-4" />
        </Button>
      </div>
      <Separator className="mt-2" />
    </li>
  );
};

export default TodoItem;
