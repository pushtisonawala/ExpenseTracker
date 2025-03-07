import React, { useState, useEffect } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) || []
  );
  
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    const total = expenses.reduce((sum, exp) => sum + Number(exp.amount), 0);
    setTotalExpenses(total);
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newExpense.description || !newExpense.amount) return;
    
    setExpenses([...expenses, { 
      ...newExpense, 
      id: Date.now(),
      amount: Number(newExpense.amount)
    }]);
    setNewExpense({
      description: '',
      amount: '',
      category: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-md-8">
          <h2>Track Your Expenses</h2>
        </div>
        <div className="col-md-4 text-end">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <h3>₹{totalExpenses.toLocaleString()}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={newExpense.description}
                onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                required
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                required
              />
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={newExpense.category}
                onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                required
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-primary w-100">Add Expense</button>
            </div>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map(expense => (
                  <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td><span className="badge bg-secondary">{expense.category}</span></td>
                    <td>₹{expense.amount.toLocaleString()}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(expense.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseTracker;
