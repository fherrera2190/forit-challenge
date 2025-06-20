import { TaskList } from "@/components/TaskList";
import { Title } from "@/components/Title";
import { Task } from "@/interfaces/task.interface";
import Link from "next/link";

export const metadata = {
  title: "List of tasks",
  description: "Generated by create next app",
};

const tasks: Task[] = [
  {
    id: "8bfa09dc-f6c2-4965-809f-c459f18b7284",
    title: "Task 1",
    description: "Description 1",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "f51a5772-bb8b-42c9-80a4-68c171dad8de",
    title: "Task 2",
    description: "Description 2",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "92532d78-063d-44d9-838a-1a7f1cc212d3",
    title: "Task 3",
    description: "Description 3",
    completed: false,
    createdAt: new Date(),
  },
];
export default function Home() {
  return (
    <>
      <Title
        title="Tasks"
        className="text-5xl font-bold min-xs:tracking-normal tracking-widest mt-[3rem] mb-[1.5rem] xs:my-[3rem] xs:text-7xl"
      />

      <section className="p-[1rem]">
        <Link href="/new-task">Create new task</Link>
      </section>
      <section className="my-4">
        <TaskList tasks={tasks} loading={false} />
      </section>

      <section className="flex items-center justify-center  gap-4 mt-3 p-[1rem]">
        <Link href="/">All</Link>
        <Link href="/?status=active">Active</Link>
        <Link href="/?status=completed">Completed</Link>
      </section>
    </>
  );
}
