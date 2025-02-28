import "dotenv/config";
import cors from "cors";
import { connectToDatabase } from "./config/mongodbConnection.js";
import express from "express";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const PORT = 3000;

app.use(cors);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server currently running" });
});

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`server runing on port: ${PORT}`);
});
