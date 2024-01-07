

const { TrackingSession, Patient } = require("../../db");

const getTrackingSessions = async (patientId) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      return { success: false, message: `Patient with ID ${patientId} not found.` };
    }
  
    const trackingSessions = await TrackingSession.findAll({
      where: { PatientId: patientId },
    });
  
    return { success: true, trackingSessions };
  } catch (error) {
    console.error('Error retrieving tracking sessions:', error);
    return { success: false, message: 'Internal server error' };
  }
};

module.exports = {
  getTrackingSessions,
};
