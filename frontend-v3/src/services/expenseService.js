import { apiRequest } from '../utils/apiUtils';

export const getExpenses = async () => {
  return await apiRequest('/api/expenses', 'GET');
};

export const addExpense = async (expense) => {
  return await apiRequest('/api/expenses', 'POST', expense);
};

export const updateExpense = async (id, expense) => {
  return await apiRequest(`/api/expenses/${id}`, 'PUT', expense);
};

export const deleteExpense = async (id) => {
  return await apiRequest(`/api/expenses/${id}`, 'DELETE');
};