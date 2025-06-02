import React from "react";
import { Checkbox } from "../../ui/checkbox";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { Separator } from "../../ui/separator";

interface TodoItemProps {
  description: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ description }) => {
  return (
    <li className="py-2 my-2">
      <div className="flex justify-between items-center gap-x-2">
        <Checkbox className="size-6" />
        <span>{description}</span>
        <Button size="icon" variant="destructive" className="size-6">
          <X />
        </Button>
      </div>
      <Separator className="mt-2" />
    </li>
  );
};

export default TodoItem;
