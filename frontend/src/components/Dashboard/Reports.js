import React, { useState, useEffect } from 'react';
import { fetchReports } from '../../services/reportService';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

function Reports() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const data = await fetchReports();
    setReportData(data);
  };

  if (!reportData) {
    return <div>Loading reports...</div>;
  }

  const chartData = {
    labels: reportData.labels,
    datasets: [
      {
        label: 'Income',
        data: reportData.income,
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Expenses',
        data: reportData.expenses,
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return (
    <div className="reports">
      <h2>Financial Reports</h2>
      <Line data={chartData} options={{ responsive: true }} />
      <div className="report-summary">
        <p>Total Income: ${reportData.totalIncome}</p>
        <p>Total Expenses: ${reportData.totalExpenses}</p>
        <p>Net Savings: ${reportData.netSavings}</p>
      </div>
    </div>
  );
}

export default Reports;