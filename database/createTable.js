import { connectToDatabase } from "../database/connectToDatabase.js";

async function createTable() {
  const db = await connectToDatabase();

  try {
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);

    console.log("Users table created");
  } catch (error) {
    console.log(error);
  }
}

createTable();
