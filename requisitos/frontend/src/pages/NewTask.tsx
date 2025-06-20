import { useContext } from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";

export const NewTask = () => {
  const { addTask } = useContext(TaskContext);

  return (
    <>
      <h1>New Task</h1>
      <section>
        <TaskForm formTitle="Create new task" action={addTask} />
      </section>
    </>
  );
};
