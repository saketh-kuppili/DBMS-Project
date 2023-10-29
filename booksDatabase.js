var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "Vamsi1234@#$%",
    database: "mrm"
});
 
async function getmedical_record() {
    var [rows, fields] = await pool.query("SELECT * FROM medical_record")
    return rows;
}

async function getMedicalRecordByPatient(patientName) {
    var [rows, fields] = await pool.query("SELECT * FROM medical_records WHERE patient_name = ?", [patientName]);
    return rows;
}

async function getMedicalRecordById(id) {
    var [rows, fields] = await pool.query("SELECT * FROM medical_records WHERE id = ?", [id]);
    if (rows.length > 0)
        return rows[0];
    else
        return null; // Indicates medical record not found
}

async function searchMedicalRecords(diagnosis) {
    var [rows, fields] = await pool.query("SELECT * FROM medical_records WHERE UPPER(diagnosis) LIKE ?", [`%${diagnosis.toUpperCase()}%`]);
    return rows;
}

async function addMedicalRecord(patientName, dateOfDiagnosis, diagnosis, treatment) {
    await pool.execute("INSERT INTO medical_records(patient_name, date_of_diagnosis, diagnosis, treatment) VALUES(?, ?, ?, ?)", [patientName, dateOfDiagnosis, diagnosis, treatment]);
}

async function updateMedicalRecord(id, record) {
    let [result, fields] = await pool.query("UPDATE medical_records SET patient_name = ?, date_of_diagnosis = ?, diagnosis = ?, treatment = ? WHERE id = ?", [record.patient_name, record.dateOfDiagnosis, record.diagnosis, record.treatment, id]);
    console.log(result);
    if (result.affectedRows === 1)
        return true;
    else
        return false;
}

async function deleteMedicalRecord(id) {
    let [result, fields] = await pool.execute("DELETE FROM medical_records WHERE id = ?", [id]);
    if (result.affectedRows === 1)
        return true;
    else
        return false;
}

async function getPatientsRecordCount() {
    var [rows, fields] = await pool.query("SELECT patient_name, COUNT(*) AS recordCount FROM medical_records GROUP BY patient_name ORDER BY patient_name");
    return rows;
}

module.exports = {
    getmedical_record,
    getMedicalRecordByPatient,
    getMedicalRecordById,
    addMedicalRecord,
    updateMedicalRecord,
    deleteMedicalRecord,
    searchMedicalRecords,
    getPatientsRecordCount
};
