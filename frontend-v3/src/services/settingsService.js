import { apiRequest } from '../utils/apiUtils';

export const getSettings = async () => {
  return await apiRequest('/api/settings', 'GET');
};

export const updateSettings = async (settings) => {
  return await apiRequest('/api/settings', 'PUT', settings);
};