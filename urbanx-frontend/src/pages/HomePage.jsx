import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios"; // Ensure this file points to your backend API base
import "../index.css";
import Slider from "../components/Slider";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/services");
        setServices(res.data);
        console.log("📦 Fetched Services:", res.data);
      } catch (err) {
        console.error("❌ Error fetching services:", err);
      }
    };
    fetchServices();
  }, []);

  // ✅ Handle service card click
  const handleCardClick = (category) => {
    const user = localStorage.getItem("urbanxUser");
    if (user) {
      navigate(`/services/${category}`);
    } else {
      alert("Please login or register to proceed with booking.");
      navigate("/login");
    }
  };

  return (
    <div>
      <Slider />

      {/* 🧾 CTA Section */}
      <section className="cta-section fade-in-up delay-1">
        <h1>Need a Service? Book Now in Seconds!</h1>
        <button onClick={() => navigate("/register")} className="cta-btn">Get Started</button>
      </section>

      {/* 🛠️ Popular Services */}
      <section className="container section fade-in-up delay-2">
        <h2 className="section-title">Popular Services</h2>
        <div className="enhanced-card-grid">
          {services.length === 0 ? (
            <p>No services available.</p>
          ) : (
            services.map((service, index) => (
              <div
                key={index}
                className="enhanced-service-card"
                onClick={() => handleCardClick(service.category)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="enhanced-card-image"
                  style={{
                    backgroundImage: `url(${service.image || "/images/default.jpg"})`,
                  }}
                />
                <div className="enhanced-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 💼 Categories */}
      <section className="container section fade-in-up delay-1">
        <h2 className="section-title">Explore Services by Category</h2>
        <div className="category-card-grid">
          {[
            { name: "Cleaning", icon: "🧹", color: "#ffeaa7" },
            { name: "AC Repair", icon: "❄️", color: "#dff9fb" },
            { name: "Carpentry", icon: "🪚", color: "#fab1a0" },
            { name: "Painting", icon: "🎨", color: "#e1bee7" },
            { name: "Pest Control", icon: "🐜", color: "#f8d7da" },
            { name: "Home Shifting", icon: "📦", color: "#c8e6c9" },
          ].map((item, index) => (
            <div
              className="category-card"
              style={{ backgroundColor: item.color }}
              key={index}
            >
              <span className="emoji-icon">{item.icon}</span>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ Trust Section */}
      <section className="trust-section enhanced-trust-section fade-in-up delay-1">
        <div className="container">
          <h2 className="trust-heading">🛡️ Your Safety, Our Priority</h2>
          <p className="trust-subtext">
            All professionals are background-verified, vaccinated, and follow strict safety protocols.
          </p>
          <div className="trust-icons">
            <div className="trust-card">
              <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Verified" />
              <p>Verified Pros</p>
            </div>
            <div className="trust-card">
              <img src="https://cdn-icons-png.flaticon.com/512/2920/2920360.png" alt="Safety Gear" />
              <p>Safety Gear</p>
            </div>
            <div className="trust-card">
              <img src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png" alt="Sanitizer" />
              <p>Sanitized Tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📞 Support */}
      <section className="support-section fade-in-up delay-2">
        <div className="container">
          <h2>Need Help?</h2>
          <p>Our support team is available 24/7 to assist you with any service issue.</p>
          <button onClick={() => navigate("/contact")} className="support-btn">Contact Support</button>
        </div>
      </section>

      {/* 🚀 How It Works */}
      <section className="journey-section fade-in-up">
        <div className="container">
          <h2 className="section-title">How UrbanX Works</h2>
          <div className="journey-timeline">
            <div className="journey-step">
              <div className="step-icon">🔍</div>
              <h4>Search</h4>
              <p>Find services in your location easily.</p>
            </div>
            <div className="journey-step">
              <div className="step-icon">📅</div>
              <h4>Book</h4>
              <p>Select your preferred time & expert.</p>
            </div>
            <div className="journey-step">
              <div className="step-icon">🛠️</div>
              <h4>Service</h4>
              <p>Our expert completes the task on time.</p>
            </div>
            <div className="journey-step">
              <div className="step-icon">🌟</div>
              <h4>Rate</h4>
              <p>Leave feedback & help us improve!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ Become Provider */}
      <section className="become-provider fade-in-up delay-3">
        <div className="container">
          <h2>Join Us as a Service Expert</h2>
          <p>Earn from your skills by joining UrbanX as a verified professional.</p>
          <button onClick={() => navigate("/provider-register")} className="provider-btn">Register as Provider</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
