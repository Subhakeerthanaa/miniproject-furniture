const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
//const { default: RentedBooks } = require('../front-end/RentedBooks');

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://subhakeerthana96:keerthi@summa.wuabi52.mongodb.net/helpdesk', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());

// Define a User schema and model using Mongoose
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const QuerySchema = new mongoose.Schema({
  name: String,
  email: String,
  product: String,
  issue: String
});


const Query = mongoose.model('Query', QuerySchema);
const User = mongoose.model('User', userSchema);


//Define a schema and model for Fine books

//module.exports = FineBook;

app.use(bodyParser.json());

// Route to handle user registration
app.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Route to handle user login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});
//
// Route to handle book rentals
  app.post('/api/query', async (req, res) => {
    const { name, email,product,issue } = req.body;
    const query = new Query({ name, email,product,issue });
    await query.save();
    res.status(201).send('Query saved successfully');
  });

app.get('/api/query', async (req, res) => {
    try {
      const queries = await Query.find();
      res.json(queries);
    } catch (error) {
      console.error('Error fetching queries:', error);
      res.status(500).send('Server Error');
    }
});
  
app.delete('/api/query/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Find the query by ID and delete it
    const query = await Query.findByIdAndDelete(id);

    if (!query) {
      // If the query with the given ID doesn't exist, return 404
      return res.status(404).json({ error: 'Query not found' });
    }

    // If deletion is successful, return 204 (no content)
    res.status(204).send();
  } catch (error) {
    // If an error occurs during deletion, return 500 (internal server error)
    console.error('Error deleting query:', error.message);
    res.status(500).json({ error: 'Could not delete query' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}` );
});

