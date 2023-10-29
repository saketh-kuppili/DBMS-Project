var express = require('express');
var db = require("./booksDatabase")

async function getMedicalRecords(req, res) {
  try {
    let records = await db.getMedicalRecords();
    res.json(records);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function getMedicalRecordsByPatient(req, res) {
  try {
    let records = await db.getMedicalRecordsByPatient(req.query.patient);
    res.json(records);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function getMedicalRecordById(req, res) {
  try {
    let record = await db.getMedicalRecordById(req.params.id);
    if (record)
      res.json(record);
    else
      res.status(404).send("Medical Record ID Not Found!");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function searchMedicalRecords(req, res) {
  try {
    let records = await db.searchMedicalRecords(req.query.diagnosis);
    res.json(records);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function addMedicalRecord(req, res) {
  try {
    if (!req.body.patientName || !req.body.dateOfDiagnosis || !req.body.diagnosis || !req.body.treatment) {
      res.status(400).send("Invalid data!");
    } else {
      await db.addMedicalRecord(req.body.patientName, req.body.dateOfDiagnosis, req.body.diagnosis, req.body.treatment);
      res.status(201).send("Medical Record Added!");
    }
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function updateMedicalRecord(req, res) {
  try {
    const updated = await db.updateMedicalRecord(req.params.id, req.body);
    if (updated)
      res.status(200).send("Medical Record Updated!");
    else
      res.status(404).send("Medical Record ID Not Found!");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function deleteMedicalRecord(req, res) {
  try {
    const deleted = await db.deleteMedicalRecord(req.params.id);
    if (deleted)
      res.status(204).send("Medical Record Deleted!");
    else
      res.status(404).send("Medical Record ID Not Found!");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

async function getPatientsRecordCount(req, res) {
  try {
    let patients = await db.getPatientsRecordCount();
    res.json(patients);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}

module.exports = {
  getMedicalRecords,
  getMedicalRecordById,
  addMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord,
  searchMedicalRecords,
  getPatientsRecordCount,
  getMedicalRecordsByPatient,
};
