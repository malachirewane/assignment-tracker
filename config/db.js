// MongoDB connection handler
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // Connect using connection string from .env
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Stop the app if DB connection fails
  }
};

module.exports = connectDB;
