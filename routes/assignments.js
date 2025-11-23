const express = require("express");
const router = express.Router();
const Assignment = require("../models/Assignment");

// READ — List all assignments
router.get("/", async (req, res) => {
  const assignments = await Assignment.find().sort({ dueDate: 1 });
  res.render("assignments/list", { assignments });
});

// CREATE — Show form
router.get("/new", (req, res) => {
  res.render("assignments/new");
});

// CREATE — Handle form submit
router.post("/", async (req, res) => {
  await Assignment.create(req.body);
  res.redirect("/assignments");
});

// UPDATE — Show edit form
router.get("/:id/edit", async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render("assignments/edit", { assignment });
});

// UPDATE — Handle edit submit
router.post("/:id", async (req, res) => {
  await Assignment.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/assignments");
});

// DELETE — Show confirmation page
router.get("/:id/delete", async (req, res) => {
  const assignment = await Assignment.findById(req.params.id);
  res.render("assignments/delete", { assignment });
});

// DELETE — Handle delete
router.post("/:id/delete", async (req, res) => {
  await Assignment.findByIdAndDelete(req.params.id);
  res.redirect("/assignments");
});

module.exports = router;
