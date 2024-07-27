import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = localStorage.getItem('token');

  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};