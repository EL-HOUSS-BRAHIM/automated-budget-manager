import { apiRequest } from '../utils/apiUtils';

export const fetchAssets = async () => {
  return await apiRequest('/api/assets', 'GET');
};

export const fetchLiabilities = async () => {
  return await apiRequest('/api/liabilities', 'GET');
};