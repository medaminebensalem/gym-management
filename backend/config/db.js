const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./backend/.env" });

const connectDB = async () => {
  try {
    console.log(" Connecting to MongoDB...");
    console.log("URI:", process.env.MONGO_URI); // ← test

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
