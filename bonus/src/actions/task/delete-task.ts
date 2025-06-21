"use server"
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTask = async (id: string) => {
  try {
    const task = await prisma.task.delete({ where: { id } });

    revalidatePath("/");
    return {
      ok: true,
      task,
    };
  } catch {
    return {
      ok: false,
      message: "Error deleting task",
    };
  }
};
