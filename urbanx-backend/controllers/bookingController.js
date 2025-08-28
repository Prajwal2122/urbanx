const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { userName, phone, address, date, time, note, service } = req.body;

    if (!userName || !phone || !address || !date || !time || !service) {
      return res.status(400).json({ message: 'All required fields must be filled.' });
    }

    const newBooking = new Booking({
      userName, phone, address, date, time, note, service
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking stored successfully', booking: newBooking });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('service');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
