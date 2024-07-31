import React, { useState } from 'react';

function ExpenseForm({ onSubmit }) {
  const [expense, setExpense] = useState({ date: '', category: '', amount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expense);
    setExpense({ date: '', category: '', amount: '' });
  };

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        value={expense.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;