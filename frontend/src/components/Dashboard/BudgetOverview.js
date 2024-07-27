import React from 'react';
import { useBudget } from '../../hooks/useBudget';
import { Doughnut } from 'react-chartjs-2';
import { formatCurrency } from '../../utils/financialUtils';
import './Dashboard.css';

function BudgetOverview() {
  const { budget } = useBudget();

  if (!budget) {
    return <div>Loading budget overview...</div>;
  }

  const data = {
    labels: ['Spent', 'Remaining'],
    datasets: [
      {
        data: [budget.spent, budget.remaining],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB']
      }
    ]
  };

  return (
    <div className="budget-overview">
      <h2>Budget Overview</h2>
      <div className="budget-chart">
        <Doughnut data={data} />
      </div>
      <div className="budget-summary">
        <p>Total Budget: {formatCurrency(budget.total)}</p>
        <p>Spent: {formatCurrency(budget.spent)}</p>
        <p>Remaining: {formatCurrency(budget.remaining)}</p>
      </div>
    </div>
  );
}

export default BudgetOverview;