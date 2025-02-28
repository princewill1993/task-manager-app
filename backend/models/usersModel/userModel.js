import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      minLength: 2,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      minLength: 2,
      required: true,
      trim: true,
    },

    userType: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    taskStatus: {
      type: String,
      enum: ["ongoing", "completed"],
      default: "ongoing",
    },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("users", userSchema);
export { userModel };
