


const getAllPatientsHandler = (req, res) => {
  res.status(200).send("Todos los pacientes");
};

const getClinicalHistoriesHandler = (req, res) => {
  res.status(200).send("Historias clínicas de un paciente");
};


const getPatientDetailsHandler = (req, res) => {
  res.status(200).send("Detalle del paciente");
};

const getTrackingSessionsHandler = (req, res) => {
  res.status(200).send("Sesiones de seguimiento de un paciente");
};


module.exports = {
  getAllPatientsHandler,
  getClinicalHistoriesHandler,
  getPatientDetailsHandler, 
  getTrackingSessionsHandler,
}