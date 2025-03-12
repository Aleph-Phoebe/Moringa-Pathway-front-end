import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${config.backendUrl}/get_users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${config.backendUrl}/delete_user/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">User Management</h3>
      <p className="mb-4">
        This page allows administrators to manage user accounts. You can view, delete, and manage users that are registered on the platform. 
        Use the delete button to remove a user from the list.
      </p>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.username} - {user.email}
            <button 
              onClick={() => deleteUser(user.id)}
              className="ml-2 text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
