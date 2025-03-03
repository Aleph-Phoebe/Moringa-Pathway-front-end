import React, { createContext, useContext, useState } from 'react';

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

  const login = async (email, password) => {
    // This would normally be an API call
    // For demo purposes, we'll just simulate a successful login
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          setUser({
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
            role: 'user'
          });
          resolve();
        } else if (email === 'admin@example.com' && password === 'password') {
          setUser({
            id: '2',
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'admin'
          });
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const register = async (name, email, password) => {
    // This would normally be an API call
    // For demo purposes, we'll just simulate a successful registration
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({
          id: '3',
          name,
          email,
          role: 'user'
        });
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};