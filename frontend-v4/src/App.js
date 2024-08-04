// src/router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Reports from './pages/Reports';

function RouterConfig() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}

export default RouterConfig;
