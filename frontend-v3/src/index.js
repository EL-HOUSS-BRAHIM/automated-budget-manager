import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { BudgetProvider } from './contexts/BudgetContext';
import { SettingsProvider } from './contexts/SettingsContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BudgetProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </BudgetProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);