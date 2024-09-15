const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 5001;
const saltRounds = 10;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load users from the JSON file
const loadUsers = () => {
  const dataPath = path.join(__dirname, 'users.json');
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

// Save users to the JSON file
const saveUsers = (users) => {
  const dataPath = path.join(__dirname, 'users.json');
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
};

// Login API with password hash comparison
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const user = users.find((u) => u.username === username);

  if (user && await bcrypt.compare(password, user.password)) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Registration API with password hashing
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();

  const userExists = users.find((u) => u.username === username);

  if (userExists) {
    return res.status(409).json({ message: 'User already exists' });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  users.push({ username, password: hashedPassword });
  saveUsers(users);

  res.status(201).json({ message: 'Registration successful' });
});

// Endpoint to handle MCQ submission
app.post('/submit-mcq', (req, res) => {
  const { question, selected } = req.body;
  console.log('MCQ Submission Received:', { question, selected });
  res.status(200).json({ message: 'Submission received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
