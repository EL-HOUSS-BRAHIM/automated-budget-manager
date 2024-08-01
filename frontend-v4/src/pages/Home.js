import React from 'react';
import '../css/HomePage.css';

function Home() {
    return (
      <div className="home">
        <header className="home-header">
          <h1>Automatic Budget Manager</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </nav>
        </header>
        <section className="hero">
          <h2>Take Control of Your Finances</h2>
          <p>Manage your budget, track expenses, and achieve your financial goals.</p>
          <button>Get Started</button>
          <button>Learn More</button>
        </section>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-item">
            <h3>Budget Tracking</h3>
            <p>Track your spending and stay within your budget.</p>
          </div>
          <div className="feature-item">
            <h3>Expense Management</h3>
            <p>Manage and categorize your expenses easily.</p>
          </div>
          <div className="feature-item">
            <h3>Data Visualization</h3>
            <p>Visualize your spending patterns with charts and graphs.</p>
          </div>
          <div className="feature-item">
            <h3>Real-Time Notifications</h3>
            <p>Receive notifications about your budget and spending.</p>
          </div>
        </section>
        <section className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>Sign Up</li>
            <li>Add Expenses</li>
            <li>Set Budget</li>
            <li>Track Progress</li>
          </ol>
        </section>
        <section className="testimonials">
          <h2>Testimonials</h2>
          <div className="testimonial-item">
            <p>"This app has changed the way I manage my money!"</p>
            <p>- User 1</p>
          </div>
          <div className="testimonial-item">
            <p>"A must-have tool for anyone looking to improve their finances."</p>
            <p>- User 2</p>
          </div>
        </section>
        <footer>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="social-media">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </footer>
      </div>
    );
  };

export default Home;