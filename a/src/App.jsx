

import Couter from "./Couter";
import { TodoProvider } from "./todo/todocontext";
import Todolist from "./todo/Todolist";

function App() {
  return (
    <TodoProvider>
       <Couter/>
      <Todolist />
    </TodoProvider>
  );
}

export default App;
