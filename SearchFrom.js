// SearchForm.js
import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [employeeNumber, setEmployeeNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(employeeNumber);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="employee-number">Enter Employee Number:</label>
      <input
        type="text"
        id="employee-number"
        required
        value={employeeNumber}
        onChange={(e) => setEmployeeNumber(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
