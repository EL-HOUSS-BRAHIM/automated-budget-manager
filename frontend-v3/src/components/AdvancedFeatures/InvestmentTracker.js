import React, { useState, useEffect } from 'react';
import { getInvestments } from '../../services/investmentService';
import './AdvancedFeatures.css';

function InvestmentTracker() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    fetchInvestments();
  }, []);

  const fetchInvestments = async () => {
    try {
      const data = await getInvestments();
      setInvestments(data.investments);
    } catch (error) {
      console.error('Failed to fetch investments:', error);
    }
  };

  return (
    <div className="investment-tracker">
      <h2>Investment Tracker</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment) => (
            <tr key={investment.id}>
              <td>{investment.name}</td>
              <td>${investment.amount}</td>
              <td>{new Date(investment.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvestmentTracker;