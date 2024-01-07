const { getAllPatients } = require("../../controllers/theGetControllers/getAllPatientsController");

const getAllPatientsHandler = async (req, res) => {
  try {
    const isActive = req.query.active === 'true'; 
    const response = await getAllPatients(isActive);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error en el manejador para obtener todos los pacientes:", error);
    res.status(500).json({ success: false, error: "Error interno del servidor", details: error.message });
  }
};




const getTrackingSessionsHandler = (req, res) => {
  res.status(200).send("Sesiones de seguimiento de un paciente");
};


module.exports = {
  getAllPatientsHandler,
  getTrackingSessionsHandler,
}