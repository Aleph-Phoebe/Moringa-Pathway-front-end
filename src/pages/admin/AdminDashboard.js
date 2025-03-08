import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Briefcase, Users, Settings, Bell } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();

  // If not an admin, redirect to home
  if (!user || user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  // Mock admin data
  const adminStats = [
    { label: 'Total Users', value: 120, icon: <Users size={20} /> },
    { label: 'Job Postings', value: 35, icon: <Briefcase size={20} /> },
    { label: 'Pending Approvals', value: 8, icon: <Settings size={20} /> },
    { label: 'New Reports', value: 4, icon: <Bell size={20} /> }
  ];

  return (
    <div className="admin-dashboard">
      <h1>Welcome, Admin {user.name}!</h1>
      <p>Manage users, jobs, and platform settings</p>

      {/* Stats Section */}
      <div className="stats-grid">
        {adminStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Admin Actions */}
      <div className="admin-actions">
        <h2>Admin Actions</h2>
        <ul>
          <li><a href="/admin/users">Manage Users</a></li>
          <li><a href="/admin/jobs">Approve Job Listings</a></li>
          <li><a href="/admin/reports">View Reports</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
