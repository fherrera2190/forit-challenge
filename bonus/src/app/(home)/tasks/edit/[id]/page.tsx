import { getTaskById } from "@/actions";
import { TaskForm } from "@/components/TaskForm";
import { Title } from "@/components/Title";
import Link from "next/link";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}
export default async function EditTask({ params }: Props) {
  const { id } = await params;

  const { ok, task } = await getTaskById(id);

  if (!ok) {
    redirect("/");
  }

  return (
    <>
      <div className="flex  items-center justify-between">
        <Title
          title="Edit Task"
          className="text-5xl font-bold min-xs:tracking-normal tracking-widest mt-[3rem] mb-[1.5rem] xs:my-[3.5rem] xs:text-6xl"
        />
        <Link
          href="/"
          className="bg-[#25b94a]  hover:bg-[#abf0bc] p-2 rounded-md"
        >
          🡰 Home
        </Link>
      </div>

      <section>
        <TaskForm task={task} />
      </section>
    </>
  );
}
