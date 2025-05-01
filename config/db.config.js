import mysql from "mysql2/promise";
import dotenv from "dotenv";


dotenv.config();

const db =  await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

async function testDbConnection () {
    try {
        console.log("Connected to DB successfully");
        const createStudentsTable = `CREATE TABLE IF NOT EXISTS Students 
        (
            student_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)

        )`
        await db.execute(createStudentsTable);
        console.log("Students table created");
    }
    catch (error) {
        console.error("Error connecting to DB:", error.message);
      
    }
}

testDbConnection();


export {db};

