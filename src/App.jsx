//import reactLogo from './assets/react.svg'
import "./App.css";
import FormTask from "./components/FormTask";
import TasksList from "./components/TasksList";
import { TasksContextProvider } from "./contexts/TasksContext";

function App() {
  return (
    <TasksContextProvider>
      <main className="container mx-auto bg-gray-50">
        <FormTask />
        <TasksList />
      </main>
    </TasksContextProvider>
  );
}

export default App;
