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
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
export { userModel };
