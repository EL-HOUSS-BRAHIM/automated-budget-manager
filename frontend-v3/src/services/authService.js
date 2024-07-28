import { apiRequest } from '../utils/apiUtils';

export const login = async (email, password) => {
  return apiRequest('/api/auth/login', 'POST', { email, password });
};

export const signup = async (name, email, password) => {
  return apiRequest('/api/auth/signup', 'POST', { name, email, password });
};

export const logout = () => {
  // Implement logout logic (e.g., clear token from localStorage)
};