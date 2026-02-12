const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

// Show form + students
app.get("/", (req, res) => {
  res.render("form", { students });
});

// Handle form submit
app.post("/submit", (req, res) => {
  const { student, branch } = req.body;

  students.push({ student, branch });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});