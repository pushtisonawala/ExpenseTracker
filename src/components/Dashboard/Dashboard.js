import React from 'react';

function Dashboard() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">Financial Dashboard</h2>
      
      <div className="row g-4">
        {/* Summary Cards */}
        <div className="col-md-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Balance</h5>
              <h3 className="mb-0">₹25,000</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Monthly Savings</h5>
              <h3 className="mb-0">₹8,500</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <h3 className="mb-0">₹16,500</h3>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Recent Transactions</h5>
            </div>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">Grocery Shopping</h6>
                    <small className="text-muted">Food</small>
                  </div>
                  <span className="text-danger">-₹2,500</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">Salary Deposit</h6>
                    <small className="text-muted">Income</small>
                  </div>
                  <span className="text-success">+₹45,000</span>
                </div>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">Electric Bill</h6>
                    <small className="text-muted">Bills</small>
                  </div>
                  <span className="text-danger">-₹1,800</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Goals Progress */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Savings Goals</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>New Laptop</span>
                  <span>75%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Vacation</span>
                  <span>45%</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
