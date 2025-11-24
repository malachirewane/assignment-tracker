// Load required modules
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to MongoDB (Atlas)
connectDB();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from /public (CSS, client JS, images)
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Assignment routes (CRUD)
const assignmentRoutes = require("./routes/assignments");
app.use("/assignments", assignmentRoutes);

// Home page route
app.get("/", (req, res) => {
  res.render("index");   // Loads views/index.ejs
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
