const Service = require('../models/Service');

exports.createService = async (req, res) => {
  try {
    const { title, description, category, price, image, provider } = req.body;

    if (!title || !description || !category || !price || !provider || !image) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newService = new Service({
      title,
      description,
      category,
      price,
      image,
      provider
    });

    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};



exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find(); // 🔁 Remove `.populate()` for now
    res.json(services);
  } catch (err) {
    console.error("❌ Error in getAllServices:", err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
