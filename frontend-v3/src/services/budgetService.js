import { apiRequest } from '../utils/apiUtils';

export const getBudget = async () => {
  return await apiRequest('/api/budget', 'GET');
};

export const updateBudget = async (budget) => {
  return await apiRequest('/api/budget', 'PUT', budget);
};