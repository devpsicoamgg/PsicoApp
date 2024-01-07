const { Patient, ClinicalHistory, TrackingSession } = require("../../db");

const getPatientDetailsController = async (patientId) => {
  try {
    const patient = await Patient.findByPk(patientId, {
      include: [ClinicalHistory, TrackingSession],
      logging: console.log,
    });
    

    if (!patient) {
      console.error("Paciente no encontrado");
      throw new Error("Paciente no encontrado");
    }

    return { success: true, data: patient };
  } catch (error) {
    console.error("Error al obtener detalles del paciente:", error);
    throw {
      success: false,
      error: "Error interno del servidor",
      details: error.message,
    };
  }
};

module.exports = { getPatientDetailsController };
