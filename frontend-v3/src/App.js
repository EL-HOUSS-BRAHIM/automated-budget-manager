import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import BudgetPlanner from './components/AdvancedFeatures/BudgetPlanner';
import InvestmentTracker from './components/AdvancedFeatures/InvestmentTracker';
import NetWorthCalculator from './components/AdvancedFeatures/NetWorthCalculator';
import FinancialGoals from './components/AdvancedFeatures/FinancialGoals';
import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
            <Route path="/settings" element={isAuthenticated ? <Settings /> : <Login />} />
            <Route path="/budget-planner" element={isAuthenticated ? <BudgetPlanner /> : <Login />} />
            <Route path="/investments" element={isAuthenticated ? <InvestmentTracker /> : <Login />} />
            <Route path="/net-worth" element={isAuthenticated ? <NetWorthCalculator /> : <Login />} />
            <Route path="/goals" element={isAuthenticated ? <FinancialGoals /> : <Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;