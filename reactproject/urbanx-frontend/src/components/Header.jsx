// File: src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar fade-in">
      <div className="nav-container">
        <div className="nav-logo">UrbanX</div>
    
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
    
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
    
        <div className="auth-buttons">
          <Link to="/login" className="btn-auth">Login</Link>
          <Link to="/register" className="btn-auth">Register</Link>
        </div>
      </div>
    </nav>
    
    
    
  );
};

export default Header;
