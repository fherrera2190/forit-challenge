import { createContext, useContext } from "react";
import { useTask } from "../hooks/useTask";

// Tipo del context → lo que retorna useTask
type TaskContextType = ReturnType<typeof useTask>;

export const TaskContext = createContext({} as TaskContextType);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useTaskContext debe usarse dentro de <TaskProvider>");
  return context;
};
