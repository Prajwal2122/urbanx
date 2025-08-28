const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
require('dotenv').config();
connectDB();

// Middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/contact', contactRoutes); // ✅ Make sure this line exists

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
