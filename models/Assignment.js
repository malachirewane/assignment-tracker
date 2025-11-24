// Assignment schema for MongoDB
// Defines the structure of each Assignment document

const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Must be provided
  },
  courseCode: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true, // Must include due date
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"], // Allowed values
    default: "Not Started"
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium"
  },
  notes: {
    type: String // Optional field
  }
});

// Export the model
module.exports = mongoose.model("Assignment", assignmentSchema);
