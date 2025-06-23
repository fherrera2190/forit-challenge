"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleStateTask = async (id: string) => {
  console.log(id);
  try {
    await prisma.$transaction(async (tx) => {
      const task = await tx.task.findUnique({
        where: { id },
        select: { completed: true },
      });

      await tx.task.update({
        where: { id },
        data: { completed: !task?.completed },
      });

      if (!task) throw new Error("Tarea no encontrada");
      revalidatePath("/");
    });
  } catch {
    return {
      ok: false,
      message: "Error deleting task",
    };
  }
};
