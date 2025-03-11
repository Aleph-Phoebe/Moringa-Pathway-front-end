import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  // Example of a defensive check before using charAt
  const username = user?.username || '';
  const firstChar = username.charAt(0).toUpperCase();

  return (
    <div className="user-dashboard">
      <h1>Welcome, {username}</h1>
      <p>Your username starts with: {firstChar}</p>
      {/* Other dashboard content */}
    </div>
  );
};

export default UserDashboard;