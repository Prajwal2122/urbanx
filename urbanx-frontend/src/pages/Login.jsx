import React, { useState } from 'react';
import axios from '../api/axios';
import '../index.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  // 🔄 Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', formData);
      alert('✅ Login successful!');
      
      // 🔐 Store token and role in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role);

      // 🔀 Redirect based on user role
      if (res.data.user.role === 'provider') {
        window.location.href = '/provider-dashboard';
      } else {
        window.location.href = '/user-dashboard';
      }

    } catch (err) {
      alert('❌ Login failed: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome Back!</h1>
        <p>Log in to continue exploring services</p>
        <img src="/images/login-illustration.svg" alt="Login Illustration" />
      </div>

      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="register-link">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
