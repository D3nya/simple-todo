import React from "react";
import { Button } from "../../ui/button";

const TodoFooter: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-muted-foreground px-4 py-3 bg-muted shadow rounded-xl w-full">
      <span>3 items left</span>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        <Button variant="outline" size="sm">
          All
        </Button>
        <Button variant="outline" size="sm">
          Active
        </Button>
        <Button variant="outline" size="sm">
          Completed
        </Button>
      </div>
      <Button variant="ghost" size="sm" className="text-destructive" title="Clear all completed tasks">
        Clear completed
      </Button>
    </div>
  );
};

export default TodoFooter;
