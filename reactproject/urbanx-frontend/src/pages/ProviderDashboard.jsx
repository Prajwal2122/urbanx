import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const ProviderDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchProviderBookings = async () => {
      try {
        const provider = JSON.parse(localStorage.getItem("urbanxUser")); // ✅ get logged-in provider
        if (!provider?.name) {
          console.warn("Provider not logged in or no name found.");
          return;
        }

        const res = await axios.get(`/bookings/provider?name=${provider.name}`); // ✅ send name in query
        setBookings(res.data);
      } catch (err) {
        console.error('Failed to fetch provider bookings:', err);
      }
    };

    fetchProviderBookings();
  }, []);

  return (
    <div className="container section">
      <h2>Bookings Assigned To You</h2>
      {bookings.length === 0 ? (
        <p>No bookings assigned.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <strong>Customer:</strong> {booking.userName} <br />
              <strong>Service:</strong> {booking.service?.title || "N/A"} <br />
              <strong>Date:</strong> {booking.date} <br />
              <strong>Time:</strong> {booking.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProviderDashboard;
