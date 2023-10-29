// App.js
import React, { useState } from 'react';
import './App.css';
import SearchForm from './SearchFrom';
import MedicalRecordsTable from './MedicalRecordsTable';

function Med() {
  const [medicalRecords, setMedicalRecords] = useState([]);
  
  const handleSearch = (employeeNumber) => {
    
  }

  return (
    <div className="App">
      <header>
        <h1>Medical Records Management</h1>
      </header>
      <div className="container">
        <h2>Search for Medical Records</h2>
        <SearchForm onSearch={handleSearch} />
        <h2>Medical Records</h2>
        <MedicalRecordsTable medicalRecords={medicalRecords} />
      </div>
    </div>
  );
}

export default Med;
