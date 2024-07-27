import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Response error:", error.response.data);
    return Promise.reject(error.response.data);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("Request error:", error.request);
    return Promise.reject({ message: "No response received from server" });
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Error:", error.message);
    return Promise.reject({ message: error.message });
  }
});

export const apiRequest = async (endpoint, method = 'GET', data = null) => {
  try {
    const config = {
      method: method,
      url: endpoint,
    };

    if (data) {
      config.data = data;
    }

    const response = await api(config);
    return response;
  } catch (error) {
    console.error(`API request failed: ${method} ${endpoint}`, error);
    throw error;
  }
};

export default api;