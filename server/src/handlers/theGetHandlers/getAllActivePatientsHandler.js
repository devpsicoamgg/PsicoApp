const { getAllActivePatients } = require("../../controllers/theGetControllers/getAllActivePatientsController");

const getAllActivePatientsHandler = async (req, res) => {
  try {
    const activePatients = await getAllActivePatients();
    res.status(200).json({ success: true, data: activePatients });
  } catch (error) {
    console.error("Error en el manejador para obtener todos los pacientes activos:", error);
    res.status(500).json({ success: false, error: "Error interno del servidor", details: error.message });
  }
};

module.exports = {
  getAllActivePatientsHandler,
};
