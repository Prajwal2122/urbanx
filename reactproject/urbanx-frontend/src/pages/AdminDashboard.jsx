// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import '../index.css';

const AdminDashboard = () => {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  const fetchData = async () => {
    try {
      const [serviceRes, bookingRes] = await Promise.all([
        axios.get('/admin/services'),
        axios.get('/admin/bookings'),
      ]);
      setServices(serviceRes.data);
      setBookings(bookingRes.data);
    } catch (err) {
      console.error('❌ Fetch error:', err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Fixed correct DELETE path
  const handleDeleteService = async (id) => {
    try {
      await axios.delete(`/admin/services/${id}`);
      fetchData();
    } catch (err) {
      console.error("❌ Delete error:", err.response?.data || err.message);
    }
  };

  // ✅ Fixed correct PUT path (no /status)
  const handleUpdateBooking = async (id) => {
    try {
      await axios.put(`/admin/bookings/${id}`);
      fetchData();
    } catch (err) {
      console.error("❌ Update error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">👩‍💼 Admin Dashboard</h1>

      <div className="section-block">
        <h2 className="section-title">📋 All Bookings</h2>
        {bookings.length === 0 ? (
          <p className="empty-text">No bookings found.</p>
        ) : (
          <div className="card-list">
            {bookings.map((b) => (
              <div className="card booking-card" key={b._id}>
                <p><strong>User:</strong> {b.userName}</p>
                <p><strong>Service:</strong> {b.service?.title}</p>
                <p><strong>Date:</strong> {b.date}</p>
                <p><strong>Time:</strong> {b.time}</p>
                <p><strong>Status:</strong> {b.status}</p>
                <button
                  className="btn update-btn"
                  onClick={() => handleUpdateBooking(b._id)}
                >
                  ✅ Update Status
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section-block">
        <h2 className="section-title">🛠️ All Services</h2>
        {services.length === 0 ? (
          <p className="empty-text">No services available.</p>
        ) : (
          <div className="card-list">
            {services.map((s) => (
              <div className="card service-card" key={s._id}>
                <p><strong>Title:</strong> {s.title}</p>
                <p><strong>Category:</strong> {s.category}</p>
                <p><strong>Price:</strong> ₹{s.price}</p>
                <button
                  className="btn delete-btn"
                  onClick={() => handleDeleteService(s._id)}
                >
                  🗑️ Delete Service
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
