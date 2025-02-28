import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}

export { connectToDatabase };
