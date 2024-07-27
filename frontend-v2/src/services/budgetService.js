import { apiRequest } from '../utils/apiUtils';

export const fetchBudget = async () => {
  return await apiRequest('/api/budget', 'GET');
};

export const updateBudget = async (newBudget) => {
  return await apiRequest('/api/budget', 'PUT', { total: newBudget });
};