import validator from "validator";

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

  res.json({
    message: "Server: User Credentials Received",
  });
}
