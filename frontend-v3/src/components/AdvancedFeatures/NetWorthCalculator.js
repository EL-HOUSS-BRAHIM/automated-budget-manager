import React, { useState, useEffect } from 'react';
import { getNetWorth } from '../../services/netWorthService';
import './AdvancedFeatures.css';

function NetWorthCalculator() {
  const [netWorth, setNetWorth] = useState(null);

  useEffect(() => {
    fetchNetWorth();
  }, []);

  const fetchNetWorth = async () => {
    try {
      const data = await getNetWorth();
      setNetWorth(data.networth);
    } catch (error) {
      console.error('Failed to fetch net worth:', error);
    }
  };

  return (
    <div className="net-worth-calculator">
      <h2>Net Worth Calculator</h2>
      {netWorth !== null ? (
        <p>Your current net worth: ${netWorth.toLocaleString()}</p>
      ) : (
        <p>Loading net worth...</p>
      )}
    </div>
  );
}

export default NetWorthCalculator;