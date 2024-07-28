import React, { createContext, useState, useEffect } from 'react';
import { login, signup, logout } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Validate token and set user
      setIsAuthenticated(true);
    }
  }, []);

  const loginUser = async (email, password) => {
    const response = await login(email, password);
    setUser(response.user);
    setIsAuthenticated(true);
    localStorage.setItem('token', response.token);
  };

  const signupUser = async (name, email, password) => {
    const response = await signup(name, email, password);
    setUser(response.user);
    setIsAuthenticated(true);
    localStorage.setItem('token', response.token);
  };

  const logoutUser = () => {
    logout();
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login: loginUser, signup: signupUser, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};