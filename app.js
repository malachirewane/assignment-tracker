const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
const assignmentRoutes = require("./routes/assignments");
app.use("/assignments", assignmentRoutes);

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
