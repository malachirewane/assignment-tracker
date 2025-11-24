// CRUD Routes for Assignment collection

const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");

// READ — List all assignments
router.get("/", async (req, res) => {
  // Finds all assignments and sorts by due date
  const assignments = await Assignment.find().sort({ dueDate: 1 });

  // Renders the list page and passes assignment data
  res.render("assignments/list", { assignments });
});

// CREATE — Show form to add a new assignment
router.get("/new", (req, res) => {
  res.render("assignments/new");
});

// CREATE — Handle form submit
router.post("/", async (req, res) => {
  // Creates new assignment using form input
  await Assignment.create(req.body);

  // Go back to list page
  res.redirect("/assignments");
});

// UPDATE — Show form to edit an assignment
router.get("/:id/edit", async (req, res) => {
  // Find assignment based on ID in URL
  const assignment = await Assignment.findById(req.params.id);

  res.render("assignments/edit", { assignment });
});

// UPDATE — Handle edit form submit
router.post("/:id", async (req, res) => {
  // Update assignment with new form data
  await Assignment.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/assignments");
});

// DELETE — Show confirmation page
router.get("/:id/delete", async (req, res) => {
  // Find assignment to confirm deletion
  const assignment = await Assignment.findById(req.params.id);

  res.render("assignments/delete", { assignment });
});

// DELETE — Handle the delete action
router.post("/:id/delete", async (req, res) => {
  // Delete assignment by ID
  await Assignment.findByIdAndDelete(req.params.id);

  res.redirect("/assignments");
});

module.exports = router;
