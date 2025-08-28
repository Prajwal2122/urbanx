import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ServiceDetails from '../components/ServiceDetails';
import Contact from "../pages/Contact";
import ProviderRegister from "../pages/ProviderRegister";
import Services from "../pages/Services";
import CategoryServices from '../pages/CategoryServices';
import ProtectedRoute from "../pages/ProtectedRoute";
import UserDashboard from "../pages/UserDashboard";
import ProviderDashboard from "../pages/ProviderDashboard";
import AdminDashboard from '../pages/AdminDashboard';
import Reviews from '../pages/Reviews';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/services/:category" element={<ServiceDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/provider-register" element={<ProviderRegister />} />
      <Route path="/services" element={<Services />} />
      <Route path="/category/:category" element={<CategoryServices />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/reviews/:serviceId" element={<Reviews />} />

      {/* ✅ Protected Routes */}
      <Route path="/user-dashboard" element={
        <ProtectedRoute>
          <UserDashboard />
        </ProtectedRoute>
      } />

      <Route path="/provider-dashboard" element={
        <ProtectedRoute>
          <ProviderDashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
};

export default AppRoutes;
