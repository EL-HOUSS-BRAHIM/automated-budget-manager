import React, { useState, useEffect } from 'react';
import { fetchBudget, updateBudget } from '../../services/budgetService';

function BudgetTracker() {
  const [budget, setBudget] = useState({ total: 0, spent: 0, remaining: 0 });
  const [newBudget, setNewBudget] = useState('');

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    const data = await fetchBudget();
    setBudget(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBudget(newBudget);
    setNewBudget('');
    loadBudget();
  };

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <div>
        <p>Total Budget: ${budget.total}</p>
        <p>Spent: ${budget.spent}</p>
        <p>Remaining: ${budget.remaining}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="New Budget"
          value={newBudget}
          onChange={(e) => setNewBudget(e.target.value)}
          required
        />
        <button type="submit">Update Budget</button>
      </form>
    </div>
  );
}

export default BudgetTracker;