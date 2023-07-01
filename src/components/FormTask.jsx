import InputField from "./InputField";
import Button from "./Button";
import { TaskContext } from "../contexts/TasksContext";
import { useContext } from "react";

const FormTask = ({ ...props }) => {
  const { add } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const formJSON = Object.fromEntries(formData.entries());

    add(formJSON);
    form.reset();
  };

  return (
    <section className="w-1/2 mx-auto">
      <h2 className="block bg-gradient-to-tr from-[#6025F5] to-[#FF5555] bg-clip-text font-sans text-5xl font-semibold leading-tight tracking-normal text-transparent antialiased my-5">Task</h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 w-full items-end"
      >
        <fieldset className="w-full">
          <InputField
            label="Task:"
            name="task"
            required
            placeholder="send an email..."
          />
        </fieldset>
        <fieldset className="w-full">
          <InputField
            label="Date:"
            name="date"
            required
            placeholder="date"
            type="date"
          />
        </fieldset>
        <Button className="h-fit">Save</Button>
      </form>
    </section>
  );
};
export default FormTask;
