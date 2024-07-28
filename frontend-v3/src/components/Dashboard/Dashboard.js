import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import BudgetTracker from './BudgetTracker';
import GoalTracker from './GoalTracker';
import Reports from './Reports';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <ExpenseTracker />
        <BudgetTracker />
        <GoalTracker />
        <Reports />
      </div>
    </div>
  );
};

export default Dashboard;