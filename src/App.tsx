import TodoFooter from "./components/shared/TodoFooter/TodoFooter";
import TodoInput from "./components/shared/TodoInput/TodoInput";
import TodoList from "./components/shared/TodoList/TodoList";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl my-4">
        <CardHeader>
          <CardHeader>
            <CardTitle className="text-4xl sm:text-6xl uppercase text-center">todos</CardTitle>
            <CardDescription className="text-center text-xs sm:text-sm">Simple todo app</CardDescription>
          </CardHeader>
        </CardHeader>
        <CardContent>
          <TodoInput />
          <TodoList />
        </CardContent>
        <CardFooter>
          <TodoFooter />
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
