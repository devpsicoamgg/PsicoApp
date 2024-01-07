const { getPatientDetailsController } = require('../../controllers/theGetControllers/getPatientDetailsController');

const getPatientDetailsHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const response = await getPatientDetailsController(patientId);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error('Error en el manejador para obtener detalles del paciente:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor', details: error.message });
  }
};

module.exports = { getPatientDetailsHandler };
