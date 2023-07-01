import { useContext } from "react";
import { TaskContext } from "../contexts/TasksContext";

const Task = ({ task, className, ...props }) => {
  const { remove } = useContext(TaskContext);

  const handleClick = (event) => {
    event.preventDefault();
    remove(task.id);
  };

  return (
    <div
      className={`shadow-md hover:shadow-xl bg-white/80 p-5 mb-5 transition-all ${className}`}
    >
      <h3 className="bg-gradient-to-tr from-[#6025F5] to-[#FF5555] bg-clip-text leading-tight tracking-normal text-transparent antialiased   font-bold text-xl mb-2">
        {task.date}
      </h3>
      <p className="text-gray-500 py-3">{task.task}</p>
      <div className="container-buttons">
        <a href="" onClick={handleClick} className="text-xs text-red-500">
          Delete
        </a>
      </div>
    </div>
  );
};
export default Task;
