import React, { useState, useEffect } from 'react';
import BudgetChart from './BudgetChart';
import ExpenseForm from './ExpenseForm';
import { fetchBudgetData, fetchExpenses } from '../utils/api';

function Dashboard() {
  const [budgetData, setBudgetData] = useState(null);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchBudgetData().then(setBudgetData);
    fetchExpenses().then(setExpenses);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {budgetData && <BudgetChart data={budgetData} />}
      <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, expense])} />
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>${expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;