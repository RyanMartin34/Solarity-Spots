import validator from "validator";
import argon2 from "argon2";
import { connectToDatabase } from "../database/connectToDatabase.js";

export async function addUser(req, res) {
  let { name, email, password } = req.body;

  // Check data types
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({
      message: "Invalid input",
    });
  }

  // Trim whitespace
  name = name.trim();
  email = email.trim().toLowerCase();

  // Check for values
  if (!name || !email || !password.trim()) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  // Check the email address is valid
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      message: "Invalid email address",
    });
  }

  try {
    const db = await connectToDatabase();
    const hashedPassword = await argon2.hash(password);

    await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
      name,
      email,
      hashedPassword,
    ]);

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    if (
      error.code === "SQLITE_CONSTRAINT" &&
      error.message.includes("users.email")
    ) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }
    console.error(error);

    return res.status(500).json({
      message: "Failed to create user",
    });
  }
}
