"use client";

import { deleteTask, toggleStateTask } from "@/actions";
import { Task } from "@/interfaces/task.interface";
import Image from "next/image";
import Link from "next/link";

export const TaskItem = ({ task }: { task: Task }) => {
  // const { removeTask, toggleTask } = useCont11ext(TaskContext);

  // const navigate = useNavigate();
  const removeTask = async () => {
    await deleteTask(task.id);
  };

  const toggleTask = async () => {
    await toggleStateTask(task.id);
  };

  return (
    <li key={task.id} className="flex gap-4 p-[1rem] border-b-1 ">

      <details className="grow-1">
        <summary className="cursor-pointer">{task.title}</summary>
        <p className="mt-2 bg-violet-500 p-3 rounded-md text-xs">{task.description}</p>
      </details>
      <div className="flex  gap-3 mt-2" style={{height: "100%"}}>
        <button onClick={() => toggleTask()} className={`cursor-pointer`}>
          <div
            className={
              task.completed
                ? "flex items-center justify-center w-4 h-4 rounded-full border border-[hsl(233,14%,35%)] bg-[linear-gradient(to_right,_hsl(192,100%,67%),_hsl(280,87%,65%))]"
                : "flex items-center justify-center w-4 h-4 rounded-full border border-[hsl(233,14%,35%)]"
            }
          >
            <Image
              src={"/assets/images/icon-check.svg"}
              width={16}
              height={16}
              className={task.completed ? "w-2 h-2" : "w-2 h-2 opacity-0"}
              alt="check"
            />
          </div>
        </button>
        <Link
          href={`/tasks/edit/${task.id}`}
          className="cursor-pointer hover:bg-[#cbb1ec] transition ease-in-out duration-300"
        >
          <Image
            src={"/assets/images/icon-edit.svg"}
            width={16}
            height={16}
            alt="edit"
          />
        </Link>
        <button
          onClick={() => removeTask()}
          className="cursor-pointer hover:bg-[#cbb1ec] transition ease-in-out duration-300"
        >
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
