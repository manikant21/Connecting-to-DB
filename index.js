import express from "express";
import dotenv from "dotenv";
import {db} from "./config/db.config.js"

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

async function testDbConnection () {
    try {
        await db.execute('SELECT 1');
        console.log("Connected to DB successfully");
    }
    catch (error) {
        console.error("Error connecting to DB:", error.message);
    }
}

testDbConnection();

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})