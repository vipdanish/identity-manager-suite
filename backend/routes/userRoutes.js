
const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/auth');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/profile', protect, getUserProfile);
router.put('/update', protect, updateUserProfile);

// Admin routes
router.delete('/delete', protect, admin, deleteUser);

module.exports = router;
