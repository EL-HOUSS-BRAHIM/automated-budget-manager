import React, { useState, useEffect } from 'react';
import { getReports } from '../../services/reportService';
import { formatCurrency } from '../../utils/financialUtils';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const data = await getReports();
      setReports(data.reports);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
    }
  };

  return (
    <div className="reports">
      <h2>Financial Reports</h2>
      {reports.map((report) => (
        <div key={report.id} className="report-item">
          <h3>{report.title}</h3>
          {report.type === 'expense_breakdown' && (
            <ExpenseBreakdownChart data={report.data} />
          )}
          {report.type === 'income_vs_expense' && (
            <IncomeVsExpenseChart data={report.data} />
          )}
        </div>
      ))}
    </div>
  );
}

function ExpenseBreakdownChart({ data }) {
  return (
    <div className="chart expense-breakdown">
      <h4>Expense Breakdown</h4>
      {Object.entries(data).map(([category, amount]) => (
        <div key={category} className="chart-bar">
          <span className="category">{category}</span>
          <div className="bar" style={{width: `${(amount / Math.max(...Object.values(data))) * 100}%`}}></div>
          <span className="amount">{formatCurrency(amount)}</span>
        </div>
      ))}
    </div>
  );
}

function IncomeVsExpenseChart({ data }) {
  const total = data.income + data.expenses;
  return (
    <div className="chart income-vs-expense">
      <h4>Income vs Expenses</h4>
      <div className="chart-bar">
        <span className="category">Income</span>
        <div className="bar income" style={{width: `${(data.income / total) * 100}%`}}></div>
        <span className="amount">{formatCurrency(data.income)}</span>
      </div>
      <div className="chart-bar">
        <span className="category">Expenses</span>
        <div className="bar expense" style={{width: `${(data.expenses / total) * 100}%`}}></div>
        <span className="amount">{formatCurrency(data.expenses)}</span>
      </div>
    </div>
  );
}

export default Reports;