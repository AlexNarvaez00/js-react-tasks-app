import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TasksContextProvider = (props) => {
  const [tasks, setTask] = useState([]);

  const add = (task) => {
    const newTask = {
      ...task,
      id: `id-${Math.round(Math.random() * 100)}-${Math.round(
        Math.random() * 100
      )}`,
    };
    setTask((prev) => [...prev, newTask]);
  };

  const remove = (id) => {
    console.log(id);
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, add, remove }}>
      {props.children}
    </TaskContext.Provider>
  );
};
