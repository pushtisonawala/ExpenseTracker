import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold" to="/">
          FinanceTracker
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {isAuthenticated ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/expenses">Expenses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/budgets">Budgets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/goals">Goals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reports">Reports</Link>
              </li>
              <li className="nav-item">
                <button 
                  onClick={handleLogout} 
                  className="btn btn-danger ms-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
