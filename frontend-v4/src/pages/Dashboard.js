import React, { useState, useEffect } from 'react';
import BudgetChart from '../components/BudgetChart';
import ExpenseForm from '../components/ExpenseForm';
import Notifications from '../components/Notification';
import { fetchBudgetData, fetchExpenses, addExpense } from '../utils/api';
import { formatCurrency, calculateTotalExpenses, groupExpensesByCategory } from '../utils/helpers';
import { showNotification } from '../utils/notifications';
import '../css/DashboardPage.css';

function Dashboard() {
  const [budgetData, setBudgetData] = useState(null);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchBudgetData().then(setBudgetData);
    fetchExpenses().then(setExpenses);
  }, []);

  const handleAddExpense = async (newExpense) => {
    try {
      const addedExpense = await addExpense(newExpense);
      setExpenses([...expenses, addedExpense]);
      showNotification('Expense added successfully', 'success');
    } catch (error) {
      showNotification('Failed to add expense', 'error');
    }
  };

  const totalExpenses = calculateTotalExpenses(expenses);
  const expensesByCategory = groupExpensesByCategory(expenses);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="budget-overview">
          <h2>Budget Overview</h2>
          {budgetData && <BudgetChart data={budgetData} />}
          <p>Total Budget: {formatCurrency(budgetData?.total || 0)}</p>
          <p>Total Expenses: {formatCurrency(totalExpenses)}</p>
          <p>Remaining: {formatCurrency((budgetData?.total || 0) - totalExpenses)}</p>
        </div>
        <div className="expense-form">
          <h2>Add Expense</h2>
          <ExpenseForm onSubmit={handleAddExpense} />
        </div>
        <div className="recent-expenses">
          <h2>Recent Expenses</h2>
          <ul>
            {expenses.slice(-5).map((expense, index) => (
              <li key={index}>
                {expense.category}: {formatCurrency(expense.amount)} on {new Date(expense.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
        <div className="expense-by-category">
          <h2>Expenses by Category</h2>
          <ul>
            {Object.entries(expensesByCategory).map(([category, categoryExpenses]) => (
              <li key={category}>
                {category}: {formatCurrency(calculateTotalExpenses(categoryExpenses))}
              </li>
            ))}
          </ul>
        </div>
        <Notifications />
      </div>
    </div>
  );
}

export default Dashboard;