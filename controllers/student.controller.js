import { db } from "../config/db.config.js";

export const addStudent = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ msg: "Name and email are required" });
        }
        const insertStudent = 'INSERT INTO Students (name, email) VALUES (?, ?)';
        const [result] = await db.execute(insertStudent, [name, email]);
        console.log(`Inserted student: ${name}, ID: ${result.insertId}`);
        return res.status(201).json({ msg: `Student ${name} added successfully` });
    } catch (err) {
        console.error("Insert error:", err);
        return res.status(500).json({ msg: "Error occurred while inserting student" });
    }
};

export const getStudentDetails = async (req, res) => {
    try {
        const getStudents = 'SELECT * FROM Students';
        const [rows] = await db.execute(getStudents);
        return res.status(200).json({ msg: rows });
    } catch (err) {
        console.error("Select error:", err);
        return res.status(500).json({ msg: "Error occurred while fetching students" });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({ msg: "Name and email are required" });
        }
        const updateStudent = 'UPDATE Students SET name = ?, email = ? WHERE student_id = ?';
        const [result] = await db.execute(updateStudent, [name, email, id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Student not found" });
        }

        console.log(`Updated student ID: ${id}, new name: ${name}`);
        return res.status(200).json({ msg: `Student updated to ${name} successfully` });
    } catch (err) {
        console.error("Update error:", err);
        return res.status(500).json({ msg: "Error occurred while updating student" });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteStudent = 'DELETE FROM Students WHERE student_id = ?';
        const [result] = await db.execute(deleteStudent, [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ msg: "Student not found" });
        }

        console.log(`Deleted student ID: ${id}`);
        return res.status(200).json({ msg: "Student deleted successfully" });
    } catch (err) {
        console.error("Delete error:", err);
        return res.status(500).json({ msg: "Error occurred while deleting student" });
    }
};
