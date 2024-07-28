import React, { useEffect, useState } from 'react';
import { getReports } from '../../services/reportService';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data.reports);
      } catch (error) {
        console.error('Failed to fetch reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="reports">
      <h2>Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>{report.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;