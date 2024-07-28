import React, { useEffect, useState } from 'react';
import { getExpenses } from '../../services/expenseService';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data.expenses);
      } catch (error) {
        console.error('Failed to fetch expenses:', error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount} ({expense.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;