const { Router } = require('express'); 

const postPatientRouter = Router()


postPatientRouter.post("/patients", (req, res) => {
  res.status(200).send("Crear Paciente");
});

postPatientRouter.post("/patients/:patientId/clinical-history", (req, res) => {
  res.status(200).send("Crear Historia Clínica");
});

postPatientRouter.post("/patients/:patientId/tracks", (req, res) => {
  res.status(200).send("Crear Sesión de Seguimiento");
});


module.exports = postPatientRouter;