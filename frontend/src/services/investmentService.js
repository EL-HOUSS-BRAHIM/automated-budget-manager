import { apiRequest } from '../utils/apiUtils';

export const fetchInvestments = async () => {
  return await apiRequest('/api/investments', 'GET');
};

export const addInvestment = async (investment) => {
  return await apiRequest('/api/investments', 'POST', investment);
};