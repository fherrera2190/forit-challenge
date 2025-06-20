import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import { TaskProvider } from "./context/TaskProvider.tsx";
import { Home } from "./pages/Home.tsx";
import { Layout } from "./layouts/Layout.tsx";
import "./index.css";
import { NewTask } from "./pages/NewTask.tsx";
import { EditTask } from "./pages/EditTask.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/new-task" element={<NewTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </StrictMode>
);
