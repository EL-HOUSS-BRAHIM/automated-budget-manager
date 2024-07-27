import React, { useState, useEffect } from 'react';
import { fetchExpenses, addExpense } from '../../services/expenseService';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const data = await fetchExpenses();
    setExpenses(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addExpense(newExpense);
    setNewExpense({ description: '', amount: '' });
    loadExpenses();
  };

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker;