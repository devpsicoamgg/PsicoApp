const createPatientHandler = (req, res) => {
  res.status(200).send("Crear Paciente");
};

const createClinicalHistoryHandler = (req, res) => {
  res.status(200).send("Crear Historia Clínica");
};

const createTrackingSessionHandler = (req, res) => {
  res.status(200).send("Crear Sesión de Seguimiento");
};


module.exports = { 
  createPatientHandler,
  createClinicalHistoryHandler, 
  createTrackingSessionHandler,
}