import React, { useEffect } from 'react';
import '../css/HomePage.css';

function HomePage() {
  useEffect(() => {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '20px';
    darkModeToggle.style.right = '20px';
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      hamburger.removeEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
      darkModeToggle.removeEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      });
    };
  }, []);

  return (
    <>
      <header>
        <div class="logo">Budget Manager</div>
        <nav>
            <div class="hamburger">
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
                <div class="hamburger-line"></div>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <div class="auth-buttons">
            <button class="login-btn" aria-label="Login">Login</button>
            <button class="register-btn" aria-label="Register">Register</button>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <h1>Manage Your Budget Efficiently</h1>
                <p>Track expenses, set budgets, and achieve financial goals</p>
                <button class="cta-btn">Get Started</button>
            </div>
        </section>

        <section class="features" id="features">
            <h2>Features</h2>
            <div class="feature-grid">
                <div class="feature">
                    <i class="fas fa-chart-line fa-3x"></i>
                    <h3>Track Expenses</h3>
                    <p>Easily log and categorize your expenses</p>
                </div>
                <div class="feature">
                    <i class="fas fa-piggy-bank fa-3x"></i>
                    <h3>Set Budgets</h3>
                    <p>Create and manage budgets for different categories</p>
                </div>
                <div class="feature">
                    <i class="fas fa-chart-pie fa-3x"></i>
                    <h3>Visualize Data</h3>
                    <p>View your financial data through intuitive charts</p>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <h2>What Our Users Say</h2>
            <div class="testimonials-container">
                <div class="testimonial">
                    <img src="https://via.placeholder.com/100" alt="User 1" />
                    <blockquote>"This app has completely changed how I manage my finances!"</blockquote>
                    <p>- Jane Doe</p>
                </div>
                <div class="testimonial">
                    <img src="https://via.placeholder.com/100" alt="User 2" />
                    <blockquote>"I've never been so organized with my money before!"</blockquote>
                    <p>- John Smith</p>
                </div>
                <div class="testimonial">
                    <img src="https://via.placeholder.com/100" alt="User 3" />
                    <blockquote>"The visualizations make it easy to understand my spending habits."</blockquote>
                    <p>- Emily Johnson</p>
                </div>
            </div>
        </section>

        <section class="cta">
            <h2>Ready to Take Control of Your Finances?</h2>
            <button class="cta-btn">Join Now</button>
        </section>
    </main>

    <footer>
        <div class="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
        </div>
        <div class="social-icons">
            <a href="#" class="social-icon" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-icon" title="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon" title="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
        <div class="contact-info">
            <p>Contact: info@budgetmanager.com</p>
        </div>
        <p>&copy; 2024 Automatic Budget Manager. All rights reserved.</p>
    </footer>
    </>
  );
}

export default HomePage;
