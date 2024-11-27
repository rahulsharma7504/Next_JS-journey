// const mongoose = require("mongoose");
import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const uri = "mongodb://127.0.0.1:27017/myDatabase";
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit with failure
  }
};

 