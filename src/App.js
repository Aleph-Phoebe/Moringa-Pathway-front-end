import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import JobsPage from './pages/JobsPage';
import PremiumPage from './pages/PremiumPage';
import Payment from './components/Payment'; // Payment Component
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          
          <Route path="/dashboard/*" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
          <Route path="/premium" element={<ProtectedRoute><PremiumPage /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} /> {/* Payment Page */}

          <Route path="/admin/*" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};


export default App;
