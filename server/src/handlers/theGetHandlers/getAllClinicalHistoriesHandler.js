const { getClinicalHistories } = require("../../controllers/theGetControllers/getAllClinicalHistoriesController");

const getAllClinicalHistoriesHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const response = await getClinicalHistories(patientId);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error en el manejador para obtener historias clínicas:", error);
    res.status(500).json({ success: false, error: "Error interno del servidor", details: error.message });
  }
};

module.exports = { getAllClinicalHistoriesHandler };
