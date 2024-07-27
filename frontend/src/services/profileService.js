import { apiRequest } from '../utils/apiUtils';

export const fetchProfile = async (userId) => {
  return await apiRequest(`/api/profile/${userId}`, 'GET');
};

export const updateProfile = async (userId, profileData) => {
  return await apiRequest(`/api/profile/${userId}`, 'PUT', profileData);
};