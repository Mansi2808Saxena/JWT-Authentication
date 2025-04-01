const express = require('express');
const dotenv = require('dotenv');
const authRouter = require('./authController');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // For parsing application/json

// Routes
app.use('/api/auth', authRouter);

// Simple test route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
