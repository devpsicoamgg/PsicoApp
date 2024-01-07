const { TrackingSession, ClinicalHistory, Patient } = require("../../db");

const postTrackingSession = async (
  patientId,
  idClinicalHistory,
  date,
  startTime,
  endTime,
  sessionType,
  sessionNotes,
  therapistObservations,
  challengesEncountered,
  goalsAchieved,
  treatmentPlanAdjustments,
  moodRating,
  sessionRating,
  additionalNotes,
) => {
  try {
    const patient = await Patient.findByPk(patientId, { attributes: ['id', 'active'] });
    const clinicalHistory = await ClinicalHistory.findByPk(idClinicalHistory, { include: Patient });

    if (!patient || !clinicalHistory || !clinicalHistory.Patient) {
      console.error('Paciente o historia clínica no encontrados');
      throw new Error('Paciente o historia clínica no encontrados');
    }

    const patientFromHistory = clinicalHistory.Patient;

    if (!patient.active || !patientFromHistory.active || patient.id !== patientFromHistory.id) {
      console.error('El paciente o la historia clínica no están activos o no coinciden');
      throw new Error('El paciente o la historia clínica no están activos o no coinciden');
    }

    const newTrackingSession = await TrackingSession.create({
      date,
      startTime,
      endTime,
      sessionType,
      sessionNotes,
      therapistObservations,
      challengesEncountered,
      goalsAchieved,
      treatmentPlanAdjustments,
      moodRating,
      sessionRating,
      additionalNotes,
      PatientId: patientId,
      ClinicalHistoryId: idClinicalHistory,
    });

    return newTrackingSession;
  } catch (error) {
    console.error('Error al crear la sesión de seguimiento:', error);
    throw error;
  }
};

module.exports = postTrackingSession;
