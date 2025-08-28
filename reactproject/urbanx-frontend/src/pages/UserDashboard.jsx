import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get(`http://localhost:8000/api/bookings/user?name=${userName}`);
      setBookings(res.data);
    };
    if (userName) fetchBookings();
  }, [userName]);

  return (
    <div className="dashboard-container">
      <h2>My Bookings</h2>
      {bookings.length === 0 ? <p>No bookings yet.</p> : (
        <div className="booking-list">
          {bookings.map((b) => (
            <div key={b._id} className="booking-card">
              <h3>{b.service?.title || "Unknown Service"}</h3>
              <p>Date: {b.date}</p>
              <p>Time: {b.time}</p>
              <p>Status: {b.status}</p>
              <p>Note: {b.note}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
