import React, { useState, useEffect } from 'react';
import { getBudget } from '../../services/budgetService';

function BudgetTracker() {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetchBudget();
  }, []);

  const fetchBudget = async () => {
    try {
      const data = await getBudget();
      setBudget(data.budget);
    } catch (error) {
      console.error('Failed to fetch budget:', error);
    }
  };

  if (!budget) return <div>Loading budget...</div>;

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <div>
        <p>Total Budget: ${budget.total}</p>
        <p>Spent: ${budget.spent}</p>
        <p>Remaining: ${budget.remaining}</p>
      </div>
      <div className="budget-progress">
        <div 
          className="budget-bar" 
          style={{width: `${(budget.spent / budget.total) * 100}%`}}
        ></div>
      </div>
    </div>
  );
}

export default BudgetTracker;