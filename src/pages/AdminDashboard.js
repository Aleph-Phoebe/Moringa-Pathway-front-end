import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Briefcase, Users, FileText, Bell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext'; // Import useAuth
import '../styles/dashboard.css';

// Admin dashboard sub-pages
import AdminHome from './admin/AdminHome';
import ManageJobs from './admin/ManageJobs';
import ManageResources from './admin/ManageResources';
import ManageUsers from './admin/ManageUsers';
import Announcements from './admin/Announcements';

const AdminDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  
  // Create placeholder components for admin sections
  const AdminPlaceholder = ({ title }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">This admin section is under development.</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar admin-sidebar">
        <div className="user-info">
          <div className="user-avatar admin-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>{user?.name}</h3>
            <p className="admin-badge">Administrator</p>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <Link 
            to="/admin" 
            className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            <Briefcase size={20} />
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/admin/jobs" 
            className={`nav-item ${location.pathname === '/admin/jobs' ? 'active' : ''}`}
          >
            <Briefcase size={20} />
            <span>Manage Jobs</span>
          </Link>
          <Link 
            to="/admin/resources" 
            className={`nav-item ${location.pathname === '/admin/resources' ? 'active' : ''}`}
          >
            <FileText size={20} />
            <span>Manage Resources</span>
          </Link>
          <Link 
            to="/admin/users" 
            className={`nav-item ${location.pathname === '/admin/users' ? 'active' : ''}`}
          >
            <Users size={20} />
            <span>Manage Users</span>
          </Link>
          <Link 
            to="/admin/announcements" 
            className={`nav-item ${location.pathname === '/admin/announcements' ? 'active' : ''}`}
          >
            <Bell size={20} />
            <span>Announcements</span>
          </Link>
        </nav>
      </div>
      
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/jobs" element={<ManageJobs />} />
          <Route path="/resources" element={<ManageResources />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/announcements" element={<Announcements />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;