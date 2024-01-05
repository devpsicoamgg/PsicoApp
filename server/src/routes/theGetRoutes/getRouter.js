const { Router } = require('express'); 

const getPatientsRouter = Router()

getPatientsRouter.get("/patients", (req, res) => {
  res.status(200).send("Todos los pacientes");
});

getPatientsRouter.get("/patients/:patientId", (req, res) => {
  res.status(200).send("Detalle del paciente");
});

getPatientsRouter.get("/patients/:patientId/clinical-history", (req, res) => {
  res.status(200).send("Historias clínicas de un paciente");
});

getPatientsRouter.get("/patients/:patientId/tracks", (req, res) => {
  res.status(200).send("Sesiones de seguimiento de un paciente");
});



module.exports = getPatientsRouter