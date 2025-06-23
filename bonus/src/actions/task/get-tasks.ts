"use server";

import { Task } from "@/interfaces/task.interface";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

interface Args {
  query?: string;
  status?: string;
}
export const getTasks = async ({
  query,
  status,
}: Args): Promise<{ tasks: Task[] }> => {
  try {
    const where: Prisma.TaskWhereInput = {};

    if (query?.trim()) {
      where.OR = [
        { title: { contains: query } },
        { description: { contains: query } },
      ];
    }

    if (status === "active") where.completed = false;
    else if (status === "completed") where.completed = true;

    const tasks = await prisma.task.findMany({ where });
    return {
      tasks,
    };
  } catch (error) {
    console.log(error);
    return { tasks: [] };
  }
};
