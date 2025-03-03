import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null ;
  
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // This would normally be an API call
    // For demo purposes, we'll just simulate a successful login
    return new Promise<void>((resolve, reject) => {
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

  const register = async (name: string, email: string, password: string) => {
    // This would normally be an API call
    // For demo purposes, we'll just simulate a successful registration
    return new Promise<void>((resolve) => {
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