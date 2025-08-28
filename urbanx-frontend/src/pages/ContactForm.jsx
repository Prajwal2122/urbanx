import React, { useState } from 'react';
import axios from '../api/axios';
import '../index.css';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contact', formData);
      alert('Support request submitted successfully!');
      onClose(); // close modal
    } catch (err) {
      console.error('Error submitting contact form:', err);
      alert('Failed to submit. Try again.');
    }
  };

  return (
    <div className="popup-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Contact Support</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
