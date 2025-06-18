import { envs } from "./config";
import express from "express";
import router from "./routes";

const port: Number = envs.PORT;
const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
