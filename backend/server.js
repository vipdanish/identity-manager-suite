
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/error');
const userRoutes = require('./routes/userRoutes');

// Initialize express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to User Management System API' });
});

// Error handler middleware
app.use(errorHandler);

// Set port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
