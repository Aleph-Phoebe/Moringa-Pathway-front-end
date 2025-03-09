import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Users, BookOpen, Settings } from 'lucide-react'; // Added Users & Settings icons
import '../styles/dashboard.css';

// Admin sub-pages
import AdminHome from './admin/AdminHome';
import ManageUsers from './admin/ManageUsers';
import ManageResources from './admin/ManageResources';

const AdminDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>{user?.name} (Admin)</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <Link 
            to="/dashboard" 
            className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <Settings size={20} />
            <span>Admin Dashboard</span>
          </Link>
          <Link 
            to="/dashboard/users" 
            className={`nav-item ${location.pathname === '/dashboard/users' ? 'active' : ''}`}
          >
            <Users size={20} />
            <span>Manage Users</span>
          </Link>
          <Link 
            to="/dashboard/resources" 
            className={`nav-item ${location.pathname === '/dashboard/resources' ? 'active' : ''}`}
          >
            <BookOpen size={20} />
            <span>Manage Resources</span>
          </Link>
        </nav>
      </div>
      
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/resources" element={<ManageResources />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
