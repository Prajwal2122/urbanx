import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer-container fade-in-up">
      <div className="footer-grid container">
        {/* UrbanX Logo & About */}
        <div className="footer-column">
          <h3 className="footer-logo">UrbanX</h3>
          <p>Your trusted platform for home services, from beauty to plumbing.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Top Services</h4>
          <ul>
            <li><Link to="/services/plumbing">Plumbing</Link></li>
            <li><Link to="/services/electrician">Electrician</Link></li>
            <li><Link to="/services/beauty">Beautician</Link></li>
            <li><Link to="/services/cleaning">Cleaning</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} UrbanX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
