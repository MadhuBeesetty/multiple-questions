const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle MCQ submission
app.post('/submit-mcq', (req, res) => {
  const { question, selected } = req.body;
  console.log('MCQ Submission Received:', { question, selected });
  res.status(200).json({ message: 'Submission received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
