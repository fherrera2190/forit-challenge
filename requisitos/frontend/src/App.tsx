import "./App.css";
import bannerM from "./assets/bg-mobile-dark.jpg";
import bannerD from "./assets/bg-desktop-dark.jpg";
import cross from "./assets/icon-cross.svg";
import edit from "./assets/icon-edit.svg";
import check from "./assets/icon-check.svg";

function App() {
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
          <ul>
            <li className="task">
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
            </li>
          </ul>
          <div className="items-info">
            <p>0 items left</p>
          </div>
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
