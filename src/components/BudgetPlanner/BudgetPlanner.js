import React, { useState } from 'react';

function BudgetPlanner() {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Food', limit: 10000, spent: 7500 },
    { id: 2, category: 'Transport', limit: 5000, spent: 3200 },
    { id: 3, category: 'Entertainment', limit: 3000, spent: 2800 }
  ]);

  const [newBudget, setNewBudget] = useState({ category: '', limit: '' });

  const handleAddBudget = (e) => {
    e.preventDefault();
    if (newBudget.category && newBudget.limit) {
      setBudgets([...budgets, { 
        id: Date.now(), 
        ...newBudget, 
        spent: 0 
      }]);
      setNewBudget({ category: '', limit: '' });
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Budget Planner</h2>

      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleAddBudget} className="row g-3">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Category Name"
                value={newBudget.category}
                onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
              />
            </div>
            <div className="col-md-5">
              <input
                type="number"
                className="form-control"
                placeholder="Monthly Limit"
                value={newBudget.limit}
                onChange={(e) => setNewBudget({...newBudget, limit: e.target.value})}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">Add Budget</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row g-4">
        {budgets.map(budget => {
          const percentage = (budget.spent / budget.limit) * 100;
          const progressColor = percentage > 90 ? 'danger' : 
                              percentage > 75 ? 'warning' : 'success';

          return (
            <div key={budget.id} className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    {budget.category}
                    <span className="badge bg-secondary">₹{budget.spent} / ₹{budget.limit}</span>
                  </h5>
                  <div className="progress">
                    <div 
                      className={`progress-bar bg-${progressColor}`}
                      style={{width: `${percentage}%`}}
                    ></div>
                  </div>
                  <small className="text-muted mt-2 d-block">
                    {percentage.toFixed(1)}% used
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BudgetPlanner;
