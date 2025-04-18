import mongoose from "mongoose";

const tasksSchema = mongoose.Schema(
  {
    task_content: {
      type: String,
      minLength: 2,
      required: true,
      trim: true,
    },

    taskStatus: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
  },
  { timestamps: true }
);

export const tasksModel = mongoose.model("tasks", tasksSchema);
export default tasksModel;
