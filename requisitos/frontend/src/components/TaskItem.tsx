import cross from "../assets/icon-cross.svg";
import edit from "../assets/icon-edit.svg";
import check from "../assets/icon-check.svg";
import type { Task } from "../interfaces/task.interface";

export const TaskItem = ({ task }: { task: Task }) => {
  return (
    <li key={task.id} className="task">
      <button className="check-button">
        <img src={check} alt="check" />
      </button>

      <p>{task.title}</p>
      <div className="options-buttons">
        <button>
          <img src={edit} alt="edit" />
        </button>
        <button>
          <img src={cross} alt="cross-delete" />
        </button>
      </div>
    </li>
  );
};
