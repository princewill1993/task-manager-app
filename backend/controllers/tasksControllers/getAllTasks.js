import mongoose from "mongoose";
import { tasksModel } from "../../models/tasksModel/tasksModel.js";

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await tasksModel.find({}).sort({ createdAt: -1 });
    console.log(allTasks);
    res
      .status(200)
      .json({ allTasks, message: "get all tasks", status: "success" });
  } catch (e) {
    res
      .status(400)
      .json({ allTasks, message: "Couldn't fetch tasks", status: "failed" });
  }
};

export default getAllTasks;
