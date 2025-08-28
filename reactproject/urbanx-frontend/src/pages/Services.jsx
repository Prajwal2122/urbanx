import React from "react";
import { Link } from "react-router-dom";

const serviceList = [
  { name: "Plumbing", slug: "plumbing", icon: "🚰" },
  { name: "Electrician", slug: "electrician", icon: "💡" },
  { name: "Beautician", slug: "beauty", icon: "💅" },
  { name: "Home Cleaning", slug: "cleaning", icon: "🧼" },
  { name: "AC Repair", slug: "ac-repair", icon: "❄️" },
  { name: "Pest Control", slug: "pest-control", icon: "🐜" },
  { name: "Carpentry", slug: "carpentry", icon: "🪚" },
  { name: "Painting", slug: "painting", icon: "🎨" },
  { name: "Home Shifting", slug: "home-shifting", icon: "📦" },
];

const Services = () => {
  return (
    <div className="services-page">
      <h2>All Services</h2>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <Link
            to={`/services/${service.slug}`}
            className="service-card"
            key={index}
          >
            <div className="emoji-icon">{service.icon}</div>
            <h4>{service.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services; // ✅ This line is required
