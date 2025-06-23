import { useContext } from "react";
import { TaskForm } from "../components/TaskForm";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router";

export const NewTask = () => {
  const { addTask } = useContext(TaskContext);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>New Task</h1>
        <Link to="/" style={{ textDecoration: "none",padding: ".5rem", backgroundColor: "green", color: "white", borderRadius: "5px" }}>←Back</Link>
      </div>
      <section>
        <TaskForm formTitle="Create new task" action={addTask} />
      </section>
    </>
  );
};
