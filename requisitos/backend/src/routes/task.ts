import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  updateTask,
} from "../controllers/task.controller";
const router = Router();

router.get("/", getTask);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
