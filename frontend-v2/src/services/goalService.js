import { apiRequest } from '../utils/apiUtils';

export const fetchGoals = async () => {
  return await apiRequest('/api/goals', 'GET');
};

export const addGoal = async (goal) => {
  return await apiRequest('/api/goals', 'POST', goal);
};