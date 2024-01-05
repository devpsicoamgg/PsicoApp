const getAllPatientsHandler = (req, res) => {
  res.status(200).send("Todos los pacientes");
};

const getPatientDetailsHandler = (req, res) => {
  res.status(200).send("Detalle del paciente");
};

const getClinicalHistoriesHandler = (req, res) => {
  res.status(200).send("Historias clínicas de un paciente");
};

const getTrackingSessionsHandler = (req, res) => {
  res.status(200).send("Sesiones de seguimiento de un paciente");
};


module.exports = {
  getAllPatientsHandler,
  getPatientDetailsHandler,
  getClinicalHistoriesHandler,
  getTrackingSessionsHandler
}