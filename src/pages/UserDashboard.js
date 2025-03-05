import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Briefcase, BookOpen, Clock, User, Settings } from 'lucide-react';
import '../styles/dashboard.css';

// Dashboard sub-pages
import DashboardHome from './dashboard/DashboardHome';
import JobApplications from './dashboard/JobApplications';
import SavedJobs from './dashboard/SavedJobs';
import Resources from './dashboard/Resources';
import Profile from './dashboard/Profile';

const UserDashboard = () => {
  const { user } = useAuth();
  const location = useLocation();
  
  // Create placeholder components for dashboard sections
  const DashboardPlaceholder = ({ title }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">This section is under development.</p>
    </div>
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="user-info">
          <div className="user-avatar">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div className="user-details">
            <h3>{user?.name}</h3>
            <p>{user?.email}</p>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <Link 
            to="/dashboard" 
            className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <Briefcase size={20} />
            <span>Dashboard</span>
          </Link>
          <Link 
            to="/dashboard/applications" 
            className={`nav-item ${location.pathname === '/dashboard/applications' ? 'active' : ''}`}
          >
            <Clock size={20} />
            <span>My Applications</span>
          </Link>
          <Link 
            to="/dashboard/saved" 
            className={`nav-item ${location.pathname === '/dashboard/saved' ? 'active' : ''}`}
          >
            <Briefcase size={20} />
            <span>Saved Jobs</span>
          </Link>
          <Link 
            to="/dashboard/resources" 
            className={`nav-item ${location.pathname === '/dashboard/resources' ? 'active' : ''}`}
          >
            <BookOpen size={20} />
            <span>Resources</span>
          </Link>
          <Link 
            to="/dashboard/profile" 
            className={`nav-item ${location.pathname === '/dashboard/profile' ? 'active' : ''}`}
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
        </nav>
      </div>
      
      <div className="dashboard-content">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/applications" element={<JobApplications />} />
          <Route path="/saved" element={<SavedJobs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;