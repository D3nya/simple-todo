import React from "react";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { Separator } from "../../ui/separator";
import type { TodoType } from "../../../context/todoTypes";
import { useTodoContext } from "../../../context/TodoContext";
import { cn } from "../../../lib/utils";

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
          onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
        >
          <X />
        </Button>
      </div>
      <Separator className="mt-2" />
    </li>
  );
};

export default TodoItem;
