import "./App.css";
import bannerM from "./assets/bg-mobile-dark.jpg";
import bannerD from "./assets/bg-desktop-dark.jpg";
import { TaskList } from "./components/TaskList";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data: tasks } = useFetch(import.meta.env.VITE_API_URL+"/tasks");

  return (
    <>
      <header>
        <picture>
          <source media="(min-width: 376px)" srcSet={bannerD} />
          <img src={bannerM} alt="banner" style={{ width: "100%" }} />
        </picture>
      </header>

      <main>
        <h1>TASK</h1>

        <section className="add-task">
          <button>Create new task</button>
        </section>
        <section className="tasks-list">
          <TaskList tasks={tasks} />
        </section>

        <section className="filters">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
