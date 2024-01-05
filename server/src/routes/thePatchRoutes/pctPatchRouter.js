const { Router } = require('express'); 

const patchPatientRouter = Router()

const patchPatientHandler = (req, res) => {
  res.status(200).send("Modificar datos del paciente");
}


patchPatientRouter.patch("/patients/:patientId", patchPatientHandler);


module.exports = patchPatientRouter