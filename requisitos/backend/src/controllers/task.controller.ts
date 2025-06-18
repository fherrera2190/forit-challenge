import { Request, Response } from "express";
import * as uuid from "uuid";

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

let tasks: Task[] = [];

const findByName = (name: string) => {
  return tasks.find((task) => task.title === name);
};

const findById = (id: string) => {
  return tasks.find((task) => task.id === id);
};

export const getTask = (req: Request, res: Response) => {
  res.json(tasks);
};

export const createTask = (req: Request, res: Response) => {
  console.log(req.body);
  console.log(uuid.v4());

  const { title, description } = req.body;

  if (findByName(title)) {
    return res.status(400).json({ error: "Task already exists" });
  }

  const newTask = {
    id: uuid.v4(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
  };

  tasks.push(newTask);
  res.json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id, title, description, completed } = req.body;

  if (findById(id)) {
    return res.status(400).json({ error: "Task not found" });
  }
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.body;

  if (findById(id)) {
    return res.status(400).json({ error: "Task not found" });
  }

  tasks = tasks.filter((task) => task.id !== id);
  res.status(200).json(tasks);
};
