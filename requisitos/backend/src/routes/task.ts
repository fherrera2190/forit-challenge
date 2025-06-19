import { Router } from "express";
import {
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";
import { createTaskSchema, updateTaskSchema } from "../schema/task.schema";
import { validate } from "../middlewares/validate.middleware";
const router = Router();

router.get("/", getTask);

router.post("/", validate(createTaskSchema), createTask);

router.put("/:id", validate(updateTaskSchema), updateTask);

router.delete("/:id", deleteTask);

export default router;
