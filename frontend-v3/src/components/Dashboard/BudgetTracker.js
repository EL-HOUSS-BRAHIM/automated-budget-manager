import React, { useEffect, useState } from 'react';
import { getBudget } from '../../services/budgetService';

const BudgetTracker = () => {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const data = await getBudget();
        setBudget(data.budget);
      } catch (error) {
        console.error('Failed to fetch budget:', error);
      }
    };

    fetchBudget();
  }, []);

  if (!budget) return <div>Loading budget...</div>;

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <p>Total: ${budget.total}</p>
      <p>Spent: ${budget.spent}</p>
      <p>Remaining: ${budget.remaining}</p>
    </div>
  );
};

export default BudgetTracker;