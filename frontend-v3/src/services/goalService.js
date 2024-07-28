import { apiRequest } from '../utils/apiUtils';

export const getGoals = async () => {
  return apiRequest('/api/goals');
};

export const createGoal = async (goalData) => {
  return apiRequest('/api/goals', 'POST', goalData);
};

export const updateGoal = async (goalId, goalData) => {
  return apiRequest(`/api/goals/${goalId}`, 'PUT', goalData);
};

export const deleteGoal = async (goalId) => {
  return apiRequest(`/api/goals/${goalId}`, 'DELETE');
};