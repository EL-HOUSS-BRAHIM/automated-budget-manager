import { apiRequest } from '../utils/apiUtils';

export const getReports = async () => {
  return await apiRequest('/api/reports', 'GET');
};

export const generateReport = async (reportType) => {
  return await apiRequest('/api/reports/generate', 'POST', { type: reportType });
};