import type { Task } from "../interfaces/task.interface";
import { TaskItem } from "./TaskItem";

interface Props {
  tasks: Task[];
  loading: boolean;
}

export const TaskList = ({ tasks, loading }: Props) => {
  return (
    <>
      <ul>
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : (
          tasks.map((task: Task) => <TaskItem key={task.id} task={task} />)
        )}
      </ul>
      <div className="items-info">
        <p>{tasks.length} items</p>
      </div>
    </>
  );
};
