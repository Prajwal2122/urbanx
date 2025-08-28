import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import "../index.css";

const ServiceDetails = () => {
  const { category } = useParams();
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    address: "",
    dateTime: "",
    note: "",
  });

  const [serviceId, setServiceId] = useState("");

  // ✅ Fetch Service ID using category
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get("/services");
        const matched = res.data.find(
          (service) => service.category === category
        );
        if (matched) {
          setServiceId(matched._id);
        }
      } catch (err) {
        console.error("Service fetch error:", err);
      }
    };
    fetchService();
  }, [category]);

  // ✅ Input Change Handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Submit Booking to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: formData.userName,
      phone: formData.phone,
      address: formData.address,
      date: formData.dateTime.split("T")[0],
      time: formData.dateTime.split("T")[1],
      note: formData.note,
      service: serviceId,
    };

    try {
      const res = await axios.post("/bookings", payload);
      alert("✅ Booking Confirmed!");
      console.log("Booking stored:", res.data);

      // Reset form
      setFormData({
        userName: "",
        phone: "",
        address: "",
        dateTime: "",
        note: "",
      });
    } catch (err) {
      console.error("Booking Error:", err);
      alert("❌ Booking Failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="service-detail-container">
      <h2>Book a {category.replace("-", " ")} Service</h2>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Your Full Name</label>
        <input
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Date & Time</label>
        <input
          type="datetime-local"
          name="dateTime"
          value={formData.dateTime}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Note (Optional)</label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
        />

        <button type="submit">Confirm Booking</button>
      </form>

      {/* ⭐ Add this section below the form */}
      <div style={{ marginTop: "1rem" }}>
        <Link to={`/reviews/${serviceId}`} className="review-link">
          ⭐ View/Add Reviews
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
