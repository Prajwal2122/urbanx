const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('❌ Error in contact route:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

module.exports = router;
