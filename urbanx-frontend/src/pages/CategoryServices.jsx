import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

const CategoryServices = () => {
  const { category } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`/services/category/${category}`);
        setServices(res.data);
      } catch (err) {
        console.error("Error fetching category services:", err);
      }
    };
    fetchServices();
  }, [category]);

  return (
    <div className="container section">
      <h2>Services in {category.replace("-", " ").toUpperCase()}</h2>
      {services.length === 0 ? (
        <p>No services found in this category.</p>
      ) : (
        <div className="enhanced-card-grid">
          {services.map((service) => (
            <div key={service._id} className="enhanced-service-card">
              <div
                className="enhanced-card-image"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="enhanced-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryServices;
