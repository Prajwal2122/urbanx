// ✅ FILE: src/pages/Register.jsx
import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', formData);
      alert('Registration successful!');

      // Store user in localStorage
      localStorage.setItem("urbanxUser", JSON.stringify(res.data.user));

      // Redirect to previously intended booking form if exists
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";
      localStorage.removeItem("redirectAfterLogin");
      navigate(redirectPath);
    } catch (err) {
      alert('Error: ' + (err.response?.data?.message || 'Registration failed'));
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>
        <p className="subtitle">Join our platform to book or offer services</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input name="name" type="text" placeholder="Enter your full name" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="Enter your email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input name="password" type="password" placeholder="Create a password" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Role</label>
            <select name="role" onChange={handleChange}>
              <option value="user">User</option>
              <option value="provider">Service Provider</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="login-link">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
