import React, { useState, useEffect } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2'; // Import Line chart from Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Sample expenses data (now includes categories)
const sampleExpenses = [
  { id: 1, name: 'Groceries', amount: 50, category: 'Food' },
  { id: 2, name: 'Gas', amount: 30, category: 'Transport' },
  { id: 3, name: 'Dinner', amount: 70, category: 'Food' },
  { id: 4, name: 'Electricity', amount: 120, category: 'Bills' },
  { id: 5, name: 'Movie Tickets', amount: 25, category: 'Entertainment' },
];

function App() {
  // Load data from localStorage (if available) or use sample data
  const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || sampleExpenses;
  const savedFilter = localStorage.getItem('filter') || 'All';

  const [expenses, setExpenses] = useState(savedExpenses);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '', category: '' });
  const [filter, setFilter] = useState(savedFilter);
  const [showGraph, setShowGraph] = useState(false); // To toggle graph visibility

  // Save expenses and filter to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses)); // Save expenses
    localStorage.setItem('filter', filter); // Save filter
  }, [expenses, filter]);

  // Add new expense
  const handleAddExpense = () => {
    if (!newExpense.name || !newExpense.amount || !newExpense.category) return; // Don't add if no name, amount or category
    const newExpenseWithId = { ...newExpense, id: expenses.length + 1 }; // Create new expense with unique ID
    setExpenses([...expenses, newExpenseWithId]); // Add to expenses array
    setNewExpense({ name: '', amount: '', category: '' }); // Clear input fields after adding
  };

  // Delete an expense
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id); // Remove the expense with the given id
    setExpenses(updatedExpenses); // Update the state with the new list of expenses
  };

  // Filter expenses by name and category
  const filteredExpenses = filter === 'All' ? expenses : expenses.filter(expense => expense.category === filter);

  // Prepare data for the chart
  const chartData = {
    labels: filteredExpenses.map(expense => expense.name),
    datasets: [
      {
        label: 'Amount Spent',
        data: filteredExpenses.map(expense => expense.amount),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="App">
      <h1>Budget Splitter</h1>

      {/* Add Expense Form */}
      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <select
          value={newExpense.category}
          onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      {/* Filter Section */}
      <div className="filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {/* Add a span to show the selected filter */}
        <span className="selected-filter">Selected Filter: {filter}</span>
      </div>

      {/* Expense List */}
      <div className="expense-list">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <p>{expense.name} </p>
              <span>₹ {expense.amount}</span>
              <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p className="no-expenses">No expenses found.</p>
        )}
      </div>

      {/* View Graph Button */}
      <button onClick={() => setShowGraph(!showGraph)} className="view-graph-btn">
        {showGraph ? 'Hide Graph' : 'View Graph'}
      </button>

      {/* Graph Section */}
      {showGraph && (
        <div className="graph-section">
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

export default App;
