import React, { useState } from 'react';

function SavingsGoals() {
  const [goals, setGoals] = useState([
    { id: 1, name: 'New Laptop', target: 80000, current: 60000, deadline: '2024-06-30' },
    { id: 2, name: 'Vacation', target: 100000, current: 45000, deadline: '2024-12-31' }
  ]);

  const [newGoal, setNewGoal] = useState({
    name: '',
    target: '',
    deadline: ''
  });

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.name && newGoal.target && newGoal.deadline) {
      setGoals([...goals, { 
        id: Date.now(), 
        ...newGoal, 
        current: 0 
      }]);
      setNewGoal({ name: '', target: '', deadline: '' });
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Savings Goals</h2>

      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleAddGoal} className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Goal Name"
                value={newGoal.name}
                onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Target Amount"
                value={newGoal.target}
                onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
              />
            </div>
            <div className="col-md-3">
              <input
                type="date"
                className="form-control"
                value={newGoal.deadline}
                onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">Add Goal</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row g-4">
        {goals.map(goal => {
          const percentage = (goal.current / goal.target) * 100;
          const remainingAmount = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{goal.name}</h5>
                  <div className="progress mb-3">
                    <div 
                      className="progress-bar bg-success" 
                      style={{width: `${percentage}%`}}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>₹{goal.current}</span>
                    <span className="text-muted">₹{goal.target}</span>
                  </div>
                  <div className="text-muted small">
                    <div>Remaining: ₹{remainingAmount}</div>
                    <div>Deadline: {new Date(goal.deadline).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SavingsGoals;
