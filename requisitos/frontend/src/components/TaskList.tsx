import type { Task } from "../interfaces/task.interface";
import { TaskItem } from "./TaskItem";

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks = [] }: Props) => {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
        {/* <li className="task">
          <button className="check-button">
            <img src={check} alt="check" />
          </button>

          <p>Tarea 1</p>
          <div className="options-buttons">
            <button>
              <img src={edit} alt="edit" />
            </button>
            <button>
              <img src={cross} alt="cross-delete" />
            </button>
          </div>
        </li>
        <li className="task">
          <button className="uncheck-button">
            <img src={check} alt="check" />
          </button>

          <p>Tarea 2</p>
          <div className="options-buttons">
            <button>
              <img src={edit} alt="edit" />
            </button>
            <button>
              <img src={cross} alt="cross-delete" />
            </button>
          </div>
        </li> */}
      </ul>
      <div className="items-info">
        <p>{tasks.length} items left</p>
      </div>
    </>
  );
};
