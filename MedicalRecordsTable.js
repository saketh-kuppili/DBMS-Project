// MedicalRecordsTable.js
import React from 'react';

function MedicalRecordsTable({ medicalRecords }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Diagnosis</th>
          <th>Treatment</th>
        </tr>
      </thead>
      <tbody>
        {medicalRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.name}</td>
            <td>{record.dob}</td>
            <td>{record.diagnosis}</td>
            <td>{record.treatment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedicalRecordsTable;
