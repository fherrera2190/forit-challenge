import { useContext } from "react";
import { TaskList } from "../components/TaskList";
import { Link, useSearchParams } from "react-router";
import { TaskContext } from "../context/TaskContext";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const { tasks, loading } = useContext(TaskContext);

  const status = searchParams.get("status");

  const filteredTasks = tasks.filter((task) => {
    if (status === "active") return !task.completed;
    if (status === "completed") return task.completed;
    return task;
  });

  return (
    <>
      <h1>TASK</h1>

      <section className="add-task">
        <Link to="/new-task">Create new task</Link>
      </section>
      <section className="tasks-list">
        <TaskList tasks={filteredTasks} loading={loading} />
      </section>

      <section className="filters">
        <Link to="/">All</Link>
        <Link to="/?status=active">Active</Link>
        <Link to="/?status=completed">Completed</Link>
      </section>
    </>
  );
};
