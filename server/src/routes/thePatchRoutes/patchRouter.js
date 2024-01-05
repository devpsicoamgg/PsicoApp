const { Router } = require('express'); 

const patchPatientRouter = Router()

patchPatientRouter.patch("/patients/:patientId", (req, res) => {
  res.status(200).send("Modificar datos del paciente");
});


module.exports = patchPatientRouter