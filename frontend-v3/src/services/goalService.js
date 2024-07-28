import { apiRequest } from '../utils/apiUtils';

export const getGoals = async () => {
  return await apiRequest('/api/goals', 'GET');
};

export const addGoal = async (goal) => {
  return await apiRequest('/api/goals', 'POST', goal);
};

export const updateGoal = async (id, goal) => {
  return await apiRequest(`/api/goals/${id}`, 'PUT', goal);
};

export const deleteGoal = async (id) => {
  return await apiRequest(`/api/goals/${id}`, 'DELETE');
};