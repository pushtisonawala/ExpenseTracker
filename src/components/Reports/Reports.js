import React, { useState } from 'react';

function Reports() {
  const [timeframe, setTimeframe] = useState('month');

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Financial Reports</h2>
        <select 
          className="form-select" 
          style={{width: 'auto'}}
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="row g-4">
        {/* Summary Cards */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <h3 className="text-danger">₹45,000</h3>
              <p className="text-muted">+12% from last {timeframe}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Income</h5>
              <h3 className="text-success">₹75,000</h3>
              <p className="text-muted">+5% from last {timeframe}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Net Savings</h5>
              <h3 className="text-primary">₹30,000</h3>
              <p className="text-muted">-2% from last {timeframe}</p>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Expense Breakdown by Category</h5>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>Food & Dining</span>
                  <span>₹15,000 (33%)</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-primary" style={{width: '33%'}}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>Transport</span>
                  <span>₹8,000 (18%)</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{width: '18%'}}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>Bills & Utilities</span>
                  <span>₹12,000 (27%)</span>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-warning" style={{width: '27%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
