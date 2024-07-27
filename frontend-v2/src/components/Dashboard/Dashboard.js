import React, { useEffect, useState } from 'react';
import { useBudget } from '../../hooks/useBudget';
import ExpenseTracker from './ExpenseTracker';
import BudgetTracker from './BudgetTracker';
import GoalTracker from './GoalTracker';
import Reports from './Reports';
import './Dashboard.css';

function Dashboard() {
  const { budget, loadBudget } = useBudget();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await loadBudget();
      setLoading(false);
    };
    loadData();
  }, [loadBudget]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
}

export default Dashboard;