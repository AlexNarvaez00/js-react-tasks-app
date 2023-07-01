import { useContext } from "react";
import { TaskContext } from "../contexts/TasksContext";
import Task from "./Task";

const TasksList = () => {
  const { tasks } = useContext(TaskContext);

  if(tasks.length == 0){
    return (
        <h3 className="mx-auto text-center text-gray-400 font-bold mt-5">Tasks is empty</h3>
    );
  }


  return (
    <section className="w-1/2 mx-auto mt-5">
      <div>
        {tasks.map((task) => <Task key={task.id} task={task} /> ) }
      </div>
    </section>
  );
};

export default TasksList;
