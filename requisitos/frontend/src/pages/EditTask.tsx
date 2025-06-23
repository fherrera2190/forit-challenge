import { useNavigate, useParams } from "react-router";
import { TaskForm } from "../components/TaskForm";
import { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Edit Task</h1>
        <Link to="/" style={{ textDecoration: "none",padding: ".5rem", backgroundColor: "green", color: "white", borderRadius: "5px" }}>←Back</Link>
      </div>
      <section>
        <TaskForm formTitle="Edit task" task={taskToEdit} action={updateTask} />
      </section>
    </>
  );
};
