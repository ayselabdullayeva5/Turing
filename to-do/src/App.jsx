import { TodoProvider} from "./Context.jsx";
import ToDoList from "./ToDoList.jsx";

function App() {
  return (
    <TodoProvider>
      <ToDoList />
    </TodoProvider>
  );
}

export default App;
