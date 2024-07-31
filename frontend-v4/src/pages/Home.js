import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Automatic Budget Manager</h1>
      <p>Take control of your finances with our easy-to-use budgeting tool.</p>
      <div className="cta-buttons">
        <Link to="/register" className="btn btn-primary">Get Started</Link>
        <Link to="/login" className="btn btn-secondary">Login</Link>
      </div>
    </div>
  );
}

export default Home;