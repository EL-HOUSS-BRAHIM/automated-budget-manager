import { apiRequest } from '../utils/apiUtils';

export const getProfile = async () => {
  return apiRequest('/api/profile');
};

export const updateProfile = async (profileData) => {
  return apiRequest('/api/profile', 'PUT', profileData);
};