"use server";

import prisma from "@/lib/prisma";

export const getTaskById = async (
  id: string
)=> {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error("Task not found");
    }

    return {
      ok: true,
      task,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "Error getting task by id",
    };
  }
};
