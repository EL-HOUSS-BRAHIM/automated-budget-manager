import axios from 'axios';
import { getToken } from './auth';

const API_URL = process.env.REACT_APP_API_URL || 'http://192.168.1.7:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = getToken();
    console.log('Token:', token); // Add this line for debugging
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request headers:', config.headers); // Add this line for debugging
    return config;
}, (error) => {
    return Promise.reject(error);
});

export const fetchBudgetData = () => api.get('/budget').then(res => res.data);
export const fetchExpenses = () => api.get('/expenses').then(res => res.data);
export const addExpense = (expense) => api.post('/expenses', expense).then(res => res.data);
export const fetchUserProfile = () => api.get('/profile').then(res => res.data);
export const updateUserProfile = (profile) => api.put('/profile', profile).then(res => res.data);
export const fetchUserSettings = () => api.get('/settings').then(res => res.data);
export const updateUserSettings = (settings) => api.put('/settings', settings).then(res => res.data);

export default api;
