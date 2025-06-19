import express from "express";
import taskRoutes from "./routes/task";
import cors from "cors";
import { errorMiddleware, notFoundMiddleware } from "./middlewares";
import { envs } from "./config";


const port: Number = envs.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
