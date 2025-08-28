const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userName: String,
  phone: String,
  address: String,
  date: String,
  time: String,
  note: String,
  status: {
    type: String,
    default: 'pending'
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
