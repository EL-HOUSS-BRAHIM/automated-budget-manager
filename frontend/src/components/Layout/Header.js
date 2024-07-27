import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Layout.css';

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">BudgetMaster</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
      <div className="user-menu">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
}

export default Header;