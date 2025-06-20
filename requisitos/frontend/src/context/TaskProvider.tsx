import { useTask } from "../hooks/useTask";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const task = useTask();
  return (
    <TaskContext.Provider
      value={{
        ...task,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
