const { Router } = require('express'); 

const postPatientRouter = Router();

const createPatientHandler = (req, res) => {
  res.status(200).send("Crear Paciente");
};

const createClinicalHistoryHandler = (req, res) => {
  res.status(200).send("Crear Historia Clínica");
};

const createTrackingSessionHandler = (req, res) => {
  res.status(200).send("Crear Sesión de Seguimiento");
};

postPatientRouter.post("/patients", createPatientHandler);
postPatientRouter.post("/patients/:patientId/clinical-history", createClinicalHistoryHandler);
postPatientRouter.post("/patients/:patientId/tracks", createTrackingSessionHandler);

module.exports = postPatientRouter;
