import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { BudgetProvider } from './contexts/BudgetContext';
import { SettingsProvider } from './contexts/SettingsContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BudgetProvider>
        <SettingsProvider>
          <Router>
            <div className="App">
              <Header />
              <main>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </main>
              <Footer />
            </div>
          </Router>
        </SettingsProvider>
      </BudgetProvider>
    </AuthProvider>
  );
}

export default App;