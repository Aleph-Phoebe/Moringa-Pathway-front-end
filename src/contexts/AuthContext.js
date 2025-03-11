import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is already logged in
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('access_token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      // Send a POST request to the backend login endpoint
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.status === 200) {
        const { access_token, user } = response.data;

        // Store the access token and user details in localStorage
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user', JSON.stringify(user));

        // Update the user state
        setUser(user);
      }
    } catch (err) {
      throw new Error(err.response?.data?.error || 'Failed to sign in');
    }
  };

  const register = async (name, email, password) => {
    try {
      // Send a POST request to the backend register endpoint
      const response = await axios.post('http://localhost:5000/register', {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        const { access_token, user } = response.data;

        // Store the access token and user details in localStorage
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user', JSON.stringify(user));

        // Update the user state
        setUser(user);
      }
    } catch (err) {
      throw new Error(err.response?.data?.error || 'Failed to register');
    }
  };

  const logout = () => {
    // Clear the access token and user details from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');

    // Update the user state
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};