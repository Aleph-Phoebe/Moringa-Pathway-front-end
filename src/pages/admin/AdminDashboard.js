import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Users, BookOpen } from 'lucide-react';
import '../../styles/dashboard.css';

// Admin sub-pages
import AdminHome from './AdminHome';
import ManageUsers from './ManageUsers';
import ManageResources from './ManageResources';

const AdminDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>{user?.name}</h3>
            <p>Admin Panel</p>
          </div>
        </div>

        <nav className="dashboard-nav">
          <Link 
            to="/admin" 
            className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            <Users size={20} />
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/admin/manage-users" 
            className={`nav-item ${location.pathname === '/admin/manage-users' ? 'active' : ''}`}
          >
            <Users size={20} />
            <span>Manage Users</span>
          </Link>
          <Link 
            to="/admin/manage-resources" 
            className={`nav-item ${location.pathname === '/admin/manage-resources' ? 'active' : ''}`}
          >
            <BookOpen size={20} />
            <span>Manage Resources</span>
          </Link>
        </nav>
      </div>

      {/* Content Area */}
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-resources" element={<ManageResources />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
