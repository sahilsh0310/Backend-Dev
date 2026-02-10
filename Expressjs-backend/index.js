const express = require("express");
const app = express();
const PORT = 8000;

const students = [
    { id: 1, name: "raj", branch: "CSE" },
    { id: 2, name: "yash", branch: "ECE" },
    { id: 3, name: "ajay", branch: "IT" },
];

app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id == id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({ message: "Student added successfully", student: newStudent });
});

app.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const studentIndex = students.findIndex(s => s.id == id);

    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...req.body };
        res.json({ message: "Student updated successfully", student: students[studentIndex] });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    const studentIndex = students.findIndex(s => s.id == id);

    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1);
        res.json({ message: "Student deleted successfully", student: deletedStudent[0] });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




console.log("Server is running on http://localhost:8000");