import { apiRequest } from '../utils/apiUtils';

export const fetchReports = async (startDate, endDate) => {
  return await apiRequest('/api/reports', 'GET', { startDate, endDate });
};

export const generateReport = async (type, startDate, endDate) => {
  return await apiRequest('/api/reports/generate', 'POST', { type, startDate, endDate });
};