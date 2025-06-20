import { useNavigate, useParams } from "react-router";
import { TaskForm } from "../components/TaskForm";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";

export const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext);
  const taskToEdit = tasks.find((task) => task.id === id);

  useEffect(() => {
    if (!taskToEdit) navigate("/");
  }, [taskToEdit, navigate]);

  return (
    <>
      <h1>Edit Task</h1>
      <section>
        <TaskForm formTitle="Edit task" task={taskToEdit} action={updateTask} />
      </section>
    </>
  );
};
