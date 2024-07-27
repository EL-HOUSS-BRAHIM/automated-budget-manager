import React, { useState } from 'react';
import { calculateSavingsGoal } from '../../utils/financialUtils';
import './AdvancedFeatures.css';

function SavingsGoalCalculator() {
  const [goal, setGoal] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [monthlySavings, setMonthlySavings] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const savings = calculateSavingsGoal(parseFloat(goal), parseInt(timeframe));
    setMonthlySavings(savings);
  };

  return (
    <div className="savings-goal-calculator">
      <h2>Savings Goal Calculator</h2>
      <form onSubmit={handleCalculate}>
        <input
          type="number"
          placeholder="Savings Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Timeframe (months)"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>
      {monthlySavings !== null && (
        <div className="result">
          <p>You need to save ${monthlySavings.toFixed(2)} per month to reach your goal.</p>
        </div>
      )}
    </div>
  );
}

export default SavingsGoalCalculator;