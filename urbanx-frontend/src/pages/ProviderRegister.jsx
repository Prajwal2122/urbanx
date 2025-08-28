import React from 'react';
import '../index.css';

const ProviderRegister = () => {
  return (
    <div className="register-container slide-up">
      <div className="register-box">
        <h2>Register as a Service Provider</h2>
        <p className="subtitle">Join UrbanX and grow your local business</p>

        <form className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="9876543210" required />
          </div>

          <div className="input-group">
            <label>Service Category</label>
            <select required>
              <option value="">Select a category</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrician">Electrician</option>
              <option value="beauty">Beauty</option>
              <option value="cleaning">Cleaning</option>
              <option value="carpentry">Carpentry</option>
            </select>
          </div>

          <div className="input-group">
            <label>City</label>
            <input type="text" placeholder="e.g. Pune, Delhi" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          <button type="submit">Register</button>
        </form>

        <p className="login-link">
          Already registered? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default ProviderRegister;
