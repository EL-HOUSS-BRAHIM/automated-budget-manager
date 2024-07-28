import { apiRequest } from '../utils/apiUtils';

export const getBudget = async () => {
  return apiRequest('/api/budget');
};

export const updateBudget = async (budgetData) => {
  return apiRequest('/api/budget', 'PUT', budgetData);
};