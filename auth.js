// server.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");

const app = express();
const PORT = 3000;
const SECRET = "abc!!23s"; // Store this securely

app.use(express.json());

const users = []; // In-memory user store

// Registration route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, password: hashedPassword };
    users.push(user);
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = users.find((u) => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: "Invalid username or password" });
    }
    const token = jwt.sign({ username: user.username }, SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Middleware to protect routes
const authMiddleware = expressjwt({ secret: SECRET, algorithms: ["HS256"] });
console.log(authMiddleware);
// Protected route example

app.get("/protected", authMiddleware, (req, res) => {
  res.send({ message: "This is a protected route", user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
