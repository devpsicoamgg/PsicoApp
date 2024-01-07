

const { TrackingSession, Patient } = require("../../db");

const getTrackingSessions = async (patientId) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      return { success: false, message: `No se encontró al paciente con ID ${patientId}.` };
    }

    const trackingSessions = await TrackingSession.findAll({
      where: { PatientId: patientId },

    });

    return { success: true, trackingSessions };
  } catch (error) {
    console.error('Error al obtener las sesiones de seguimiento:', error);
    return { success: false, message: 'Error interno del servidor' };
  }
};

module.exports = {
  getTrackingSessions,
};
