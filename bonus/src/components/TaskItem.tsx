"use client";

import { deleteTask } from "@/actions/task/delete-task";
import { Task } from "@/interfaces/task.interface";
import Image from "next/image";

export const TaskItem = ({ task }: { task: Task }) => {
  // const { removeTask, toggleTask } = useCont11ext(TaskContext);

  // const navigate = useNavigate();
  const removeTask = async () => {
    const resp = await deleteTask(task.id);
    console.log(resp);
  };

  return (
    <li
      key={task.id}
      className="flex   items-center gap-4 p-[1rem] border-b-1 "
    >
      <button
        className={`${task.completed ? "check-button" : "uncheck-button"} `}
      >
        <Image
          src={"/assets/images/icon-check.svg"}
          width={16}
          height={16}
          alt="check"
        />
      </button>

      <p className="grow-1">{task.title}</p>
      <div className="flex gap-3 items-center">
        <button>
          <Image
            src={"/assets/images/icon-edit.svg"}
            width={16}
            height={16}
            alt="edit"
          />
        </button>
        <button onClick={() => removeTask()}>
          <Image
            width={16}
            height={16}
            src={"/assets/images/icon-cross.svg"}
            alt="cross-delete"
          />
        </button>
      </div>
    </li>
  );
};
