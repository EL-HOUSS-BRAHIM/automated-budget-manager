import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/auth';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header>
        <div className="logo">
          <i className="fas fa-chart-pie"></i>
          <span>Budget Manager</span>
        </div>
        <nav>
          <div className="hamburger">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
          <ul>
            <li><a href="#" className="active">Dashboard</a></li>
            <li><a href="#">Expenses</a></li>
            <li><a href="#">Budgets</a></li>
            <li><a href="#">Reports</a></li>
          </ul>
        </nav>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="avatar" />
          <div className="dropdown">
            <button className="dropbtn">John Doe</button>
            <div className="dropdown-content">
              <a href="#"><i className="fas fa-user"></i> Profile</a>
              <a href="#"><i className="fas fa-cog"></i> Settings</a>
              <a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Navbar;