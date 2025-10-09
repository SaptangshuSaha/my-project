const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// In-memory "database"
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Experiment-16 API 🚀");
});


// 🟢 READ all users
app.get("/users", (req, res) => {
  res.json(users);
});

// 🟢 READ single user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// 🟡 CREATE new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({
    message: "User created successfully",
    user: newUser
  });
});

// 🔵 UPDATE user by ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json({
      message: "User updated successfully",
      user: users[index]
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// 🔴 DELETE user by ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json({
      message: "User deleted successfully",
      user: deletedUser[0]
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
