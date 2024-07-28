import { apiRequest } from '../utils/apiUtils';

export const login = async (email, password) => {
  const response = await apiRequest('/api/auth/login', 'POST', { email, password });
  return response.user;
};

export const signup = async (name, email, password) => {
  const response = await apiRequest('/api/auth/signup', 'POST', { name, email, password });
  return response.user;
};

export const logout = async () => {
  await apiRequest('/api/auth/logout', 'POST');
};