import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import BudgetPlanner from './components/BudgetPlanner/BudgetPlanner';
import SavingsGoals from './components/Goals/SavingsGoals';
import Reports from './components/Reports/Reports';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  const handleLogin = (credentials) => {
    if (credentials.email && credentials.password) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        
        <main className="flex-grow-1 bg-light py-4">
          <div className="container">
            <Routes>
              <Route path="/login" element={
                !isAuthenticated ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              } />
              <Route path="/signup" element={
                !isAuthenticated ? (
                  <SignUp onLogin={handleLogin} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              } />
              <Route path="/dashboard" element={
                isAuthenticated ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/login" />
                )
              } />
              <Route path="/expenses" element={
                isAuthenticated ? (
                  <ExpenseTracker />
                ) : (
                  <Navigate to="/login" />
                )
              } />
              <Route path="/budgets" element={
                isAuthenticated ? (
                  <BudgetPlanner />
                ) : (
                  <Navigate to="/login" />
                )
              } />
              <Route path="/goals" element={
                isAuthenticated ? (
                  <SavingsGoals />
                ) : (
                  <Navigate to="/login" />
                )
              } />
              <Route path="/reports" element={
                isAuthenticated ? (
                  <Reports />
                ) : (
                  <Navigate to="/login" />
                )
              } />
              <Route path="/" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-dark text-light py-4">
          <div className="container text-center">
            <p className="mb-0">© 2024 FinanceTracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
