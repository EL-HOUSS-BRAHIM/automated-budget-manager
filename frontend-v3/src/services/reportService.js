import { apiRequest } from '../utils/apiUtils';

export const getReports = async () => {
  return apiRequest('/api/reports');
};

export const generateReport = async (reportType, startDate, endDate) => {
  return apiRequest('/api/reports/generate', 'POST', { reportType, startDate, endDate });
};