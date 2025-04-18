import express from "express";
import saveTask from "../controllers/tasksControllers/userTasks.js";
import getAllTasks from "../controllers/tasksControllers/getAllTasks.js";

const taskRouter = express.Router();

taskRouter.post("/addTask", saveTask);
taskRouter.get("/allTask", getAllTasks);

export default taskRouter;
