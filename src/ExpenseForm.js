import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      addExpense({ description, amount: parseFloat(amount), category });
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  return (
    <div className="form-container">
      <h2>Add an Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter expense description"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category (e.g., food, transport)"
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
