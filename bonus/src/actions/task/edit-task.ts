"use server";

import prisma from "@/lib/prisma";

interface Args {
  id: string;
  data: {
    title: string;
    description: string;
  };
}

export const editTask = async ({ id, data }: Args) => {
  try {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data,
    });

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
