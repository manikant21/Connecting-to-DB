import { Router } from "express";
import { addStudent, deleteStudent, getStudentDetails, updateStudent } from "../controllers/student.controller.js";


const router = Router();

router.post("/add", addStudent);
router.get("/", getStudentDetails);
router.put("/update/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

export {router}