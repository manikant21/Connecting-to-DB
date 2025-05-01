import express from "express";
import dotenv from "dotenv";
import { router as studentRouter } from "./routes/student.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/v1/student", studentRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})