import cross from "../assets/icon-cross.svg";
import edit from "../assets/icon-edit.svg";
import check from "../assets/icon-check.svg";
import type { Task } from "../interfaces/task.interface";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router";

export const TaskItem = ({ task }: { task: Task }) => {
  const { removeTask, toggleTask } = useContext(TaskContext);

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/tasks/${task.id}`, {
        method: "DELETE",
      });
      removeTask(task.id);
    } catch {
      console.log("error");
    }
  };
  const handleToggle = async () => {
    const method = task ? "PUT" : "POST";
    const url = `${import.meta.env.VITE_API_URL}/tasks/${task.id}`;
    const data = { completed: !task.completed };
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const task = await res.json();
      toggleTask(task.id);
    } catch {
      console.log("error");
    }
  };
  return (
    <li key={task.id} className="task">
      <details>
        <summary>{task.title}</summary>
        <p>{task.description}</p>
      </details>

      <div className="options-buttons">
        <button
          onClick={() => handleToggle()}
          className={`${task.completed ? "check-button" : "uncheck-button"} `}
        >
          <img src={check} alt="check" />
        </button>
        <button onClick={() => navigate(`/edit/${task.id}`)}>
          <img src={edit} alt="edit" />
        </button>
        <button onClick={handleDelete}>
          <img src={cross} alt="cross-delete" />
        </button>
      </div>
    </li>
  );
};
