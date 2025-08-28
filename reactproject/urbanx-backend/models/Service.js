const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  location: { type: String, required: true },
  image: { type: String },
});


module.exports = mongoose.model('Service', serviceSchema);
