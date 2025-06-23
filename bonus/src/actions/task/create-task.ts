"use server";

import { Task } from "@/interfaces/task.interface";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createTask = async ({
  title,
  description,
}: Pick<Task, "title" | "description">) => {
  try {
    const newTask = await prisma.task.create({ data: { title, description } });
    console.log(newTask);
    revalidatePath("/");
    return {
      ok: true,
      newTask,
    };
  } catch {
    return {
      ok: false,
      message: "Error creating task",
    };
  }
};
