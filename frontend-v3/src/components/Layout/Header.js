import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './Layout.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Budget Manager</Link>
      </div>
      <nav>
        {user ? (
          <>
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;