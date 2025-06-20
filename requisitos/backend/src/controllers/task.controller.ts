import { NextFunction, Request, Response } from "express";
import * as uuid from "uuid";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

let tasks: Task[] = [
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

const findByName = (name: string) => {
  return tasks.find((task) => task.title === name);
};

const findById = (id: string) => {
  return tasks.find((task) => task.id === id);
};

export const getTask = (req: Request, res: Response) => {
  res.status(200).json(tasks);
};

export const createTask = (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;

  if (findByName(title)) {
    const error = new Error(`Task already exists`);
    (error as any).statusCode = 409;
    return next(error);
  }

  const newTask: Task = {
    id: uuid.v4(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, completed } = req.body;

  const { id } = req.params;

  let taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    const error = new Error(`Task with ID ${id} not found for update.`);
    (error as any).statusCode = 404;
    return next(error);
  }

  if (title !== undefined) {
    tasks[taskIndex].title = title;
  }

  if (description !== undefined) {
    tasks[taskIndex].description = description;
  }

  if (completed !== undefined) {
    tasks[taskIndex].completed = completed;
  }

  res.json(tasks[taskIndex]);
};

export const deleteTask = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!findById(id)) {
    const error = new Error(`Task not found`);
    (error as any).statusCode = 400;
    return next(error);
  }

  tasks = tasks.filter((task) => task.id !== id);
  res.json({ message: "Task deleted" });
};
