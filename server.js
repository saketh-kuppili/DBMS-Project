var express = require('express');
var handlers = require("./restHandlers")
var cors = require('cors')

const port = 3306;
var app = express();
app.use(express.json());
app.use(cors());

// static files config
app.use(express.static('dist', { index: 'index.html' }));

app.get('/medical_record', handlers.getMedicalRecords);
app.get('/medical_record/patient', handlers.getMedicalRecordsByPatient);

app.get('/patients', handlers.getPatientsRecordCount);
app.get('/medical_record/search', handlers.searchMedicalRecords);

app.get('/medical_record/:id', handlers.getMedicalRecordById);

app.post('/medical_record', handlers.addMedicalRecord);
app.put('/medical_record/:id', handlers.updateMedicalRecord);
app.delete('/medical_record/:id', handlers.deleteMedicalRecord);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
