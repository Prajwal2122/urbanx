// controllers/adminController.js
const Booking = require('../models/Booking');
const Service = require('../models/Service');

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('service');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching services' });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.status = 'confirmed'; // or whatever logic you want
    await booking.save();
    res.json({ message: 'Booking updated', booking });
  } catch (err) {
    res.status(500).json({ message: 'Error updating booking' });
  }
};

exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting service' });
  }
};
