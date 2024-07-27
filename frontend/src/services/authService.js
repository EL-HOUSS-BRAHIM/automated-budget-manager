import { apiRequest } from '../utils/apiUtils';

export const login = async (email, password) => {
  const response = await apiRequest('/api/login', 'POST', { email, password });
  return response.data;
};

export const signup = async (userData) => {
  const response = await apiRequest('/api/signup', 'POST', userData);
  return response.data;
};

export const logout = async () => {
  await apiRequest('/api/logout', 'POST');
};