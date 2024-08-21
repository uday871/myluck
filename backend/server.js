




require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
// console.log(process.env.MONGO_DB_CONNECTION_URL);

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema, 'user');

// Route to register a new user
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Route to get all users
app.get('/user', async (req, res) => {
  try {
    const usertable = await User.find();
    return res.status(200).send(usertable);
  } catch (error) {
    return res.status(500).send("Error occurred while fetching data: " + error.message);
  }
});




// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
