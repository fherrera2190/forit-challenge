import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title cannot be empty")
    .max(255, "Title is too long."),
  description: z.string().min(1, "Description cannot be empty").max(255),
  completed: z.boolean().optional().default(false),
});

export const updateTaskSchema = z
  .object({
    title: z
      .string()
      .min(1, "Title cannot be empty")
      .max(255, "Title is too long.")
      .optional(),
    description: z
      .string()
      .min(1, "Description cannot be empty")
      .max(255)
      .optional(),
    completed: z.boolean().optional(),
  })
  .refine(
    (data) =>
      data.title !== undefined ||
      data.completed !== undefined ||
      data.description !== undefined,
    {
      message:
        "At least one field (title, description or completed) must be provided for update.",
      path: ["title", "description", "completed"],
    }
  );
