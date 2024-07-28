import { apiRequest } from '../utils/apiUtils';

export const getProfile = async () => {
  return await apiRequest('/api/profile', 'GET');
};

export const updateProfile = async (profile) => {
  return await apiRequest('/api/profile', 'PUT', profile);
};