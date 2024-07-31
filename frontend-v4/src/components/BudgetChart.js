import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetChart({ data }) {
  const chartData = {
    labels: data.map(item => item.category),
    datasets: [{
      data: data.map(item => item.amount),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40'
      ]
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Budget Breakdown'
      }
    }
  };

  return (
    <div className="budget-chart">
      <Pie data={chartData} options={options} />
    </div>
  );
}

export default BudgetChart;