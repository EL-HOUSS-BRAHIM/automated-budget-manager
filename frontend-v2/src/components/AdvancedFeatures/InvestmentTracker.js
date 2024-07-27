import React, { useState, useEffect } from 'react';
import { fetchInvestments, addInvestment } from '../../services/investmentService';
import './AdvancedFeatures.css';

function InvestmentTracker() {
  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState({ name: '', amount: '', date: '' });

  useEffect(() => {
    loadInvestments();
  }, []);

  const loadInvestments = async () => {
    const data = await fetchInvestments();
    setInvestments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addInvestment(newInvestment);
    setNewInvestment({ name: '', amount: '', date: '' });
    loadInvestments();
  };

  return (
    <div className="investment-tracker">
      <h2>Investment Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Investment Name"
          value={newInvestment.name}
          onChange={(e) => setNewInvestment({ ...newInvestment, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={newInvestment.amount}
          onChange={(e) => setNewInvestment({ ...newInvestment, amount: e.target.value })}
          required
        />
        <input
          type="date"
          value={newInvestment.date}
          onChange={(e) => setNewInvestment({ ...newInvestment, date: e.target.value })}
          required
        />
        <button type="submit">Add Investment</button>
      </form>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id}>
            {investment.name}: ${investment.amount} (Date: {investment.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvestmentTracker;