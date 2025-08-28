import React, { useState } from 'react';
import axios from '../api/axios'; // ✅ Make sure baseURL is set
import '../index.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contact', formData); // 👈 sends to http://localhost:8000/api/contact

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Failed to submit. Please try again later.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Support</h2>
      <p className="subtitle">Have a question or issue? We're here to help 24/7.</p>

      {submitted ? (
        <div className="thank-you-message">
          <h3>✅ Thank you!</h3>
          <p>Your message has been submitted. Our support team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
