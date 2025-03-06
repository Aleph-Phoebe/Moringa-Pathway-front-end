import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div className="admin-home">
      <h1>Welcome, {user?.name}</h1>
      <p>This is the admin dashboard home page. Here you can find an overview of administrative tasks and quick access to various sections.</p>
      
      <div className="admin-overview">
        <Link to="/admin/jobs" className="overview-card">
          <h2>Manage Jobs</h2>
          <p>View and manage job postings.</p>
        </Link>
        <Link to="/admin/resources" className="overview-card">
          <h2>Manage Resources</h2>
          <p>View and manage resources.</p>
        </Link>
        <Link to="/admin/users" className="overview-card">
          <h2>Manage Users</h2>
          <p>View and manage user accounts.</p>
        </Link>
        <Link to="/admin/announcements" className="overview-card">
          <h2>Announcements</h2>
          <p>View and manage announcements.</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminHome;