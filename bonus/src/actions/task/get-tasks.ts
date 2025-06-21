"use server";

import { Task } from "@/interfaces/task.interface";
import prisma from "@/lib/prisma";

export const getTasks = async (): Promise<{ tasks: Task[] }> => {
  try {
    const tasks = await prisma.task.findMany({});

    return {
      tasks,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error getting tasks");
  }
};
