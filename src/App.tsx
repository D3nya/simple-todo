import TodoActions from "./components/shared/TodoActions/TodoActions";
import TodoInput from "./components/shared/TodoInput/TodoInput";
import TodoList from "./components/shared/TodoList/TodoList";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import TodoProvider from "./context/TodoProvider/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen flex items-start justify-center bg-muted/50 px-4">
        <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl my-4 shadow-lg">
          <CardHeader>
            <CardTitle className="text-4xl sm:text-6xl uppercase text-center">todos</CardTitle>
            <CardDescription className="text-center text-xs sm:text-sm">Simple todo app</CardDescription>
          </CardHeader>

          <CardContent>
            <TodoInput />
            <TodoList />
          </CardContent>

          <CardFooter>
            <TodoActions />
          </CardFooter>
        </Card>
      </div>
    </TodoProvider>
  );
}

export default App;
