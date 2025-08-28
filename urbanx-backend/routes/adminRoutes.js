// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllBookings,
  getAllServices,
  updateBookingStatus,
  deleteService
} = require('../controllers/adminController');

const { verifyToken } = require('../middleware/authMiddleware');

// ✅ Correct routes and handler functions
router.get('/bookings', verifyToken, getAllBookings);
router.get('/services', verifyToken, getAllServices);
router.put('/bookings/:id', verifyToken, updateBookingStatus); // ✅ must match controller
router.delete('/services/:id', verifyToken, deleteService);     // ✅ must match controller

module.exports = router;
