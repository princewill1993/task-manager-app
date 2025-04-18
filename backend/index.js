import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectToDatabase } from "./config/mongodbConnection.js";
import authRoutes from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: [
      "https://task-manager-app-tau-black.vercel.app/",
      "https://task-manager-app-tau-black.vercel.app",
      "http://localhost:5173/",
      "http://localhost:5173",
    ],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server currently running" });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/task", taskRouter);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`server running on port: ${PORT}`);
});
