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
      <main>
        <section className="overview">
          <h2>Overview</h2>
          <div className="summary-cards">
            <div className="card">
              <h3>Total Budget</h3>
              <p>{formatCurrency(budgetData?.total || 0)}</p>
            </div>
            <div className="card">
              <h3>Total Expenses</h3>
              <p>{formatCurrency(totalExpenses)}</p>
            </div>
            <div className="card">
              <h3>Remaining</h3>
              <p>{formatCurrency((budgetData?.total || 0) - totalExpenses)}</p>
            </div>
          </div>
        </section>

        <section className="expense-form">
          <h2>Add Expense</h2>
          <ExpenseForm onSubmit={handleAddExpense} />
        </section>

        <section className="expense-summary">
          <h2>Recent Expenses</h2>
          <ul>
            {expenses.slice(-5).map((expense, index) => (
              <li key={index}>
                {expense.category}: {formatCurrency(expense.amount)} on {new Date(expense.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </section>

        <section className="budget-summary">
          <h2>Budget Summary</h2>
          <div className="budget-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(totalExpenses / (budgetData?.total || 1)) * 100}%` }}></div>
            </div>
            <p>{((totalExpenses / (budgetData?.total || 1)) * 100).toFixed(1)}% of budget used</p>
          </div>
          <button className="update-budget-btn">Update Budget</button>
        </section>

        <section className="charts">
          <h2>Spending Patterns</h2>
          <div className="chart">
            <BudgetChart data={budgetData} />
          </div>
        </section>

        <section className="notifications">
          <h2>Notifications</h2>
          <Notifications />
        </section>
      </main>
      <button className="dark-mode-toggle" aria-label="Toggle dark mode">
        <i className="fas fa-moon"></i>
      </button>
    </div>
  );
}

export default Dashboard;