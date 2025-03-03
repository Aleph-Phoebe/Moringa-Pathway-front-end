import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/dashboard/*" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;