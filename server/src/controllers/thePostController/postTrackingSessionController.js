const { TrackingSession, ClinicalHistory, Patient } = require("../../db");

const createTrackingSession = async (
  idPcte,
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
    // Crear la sesión de seguimiento
    const newTrackingSession = await TrackingSession.create({
      PatientId: idPcte,
      ClinicalHistoryId: idClinicalHistory,
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
    });


    const patient = await Patient.findByPk(idPcte);

    if (patient) {
  
      await newTrackingSession.setPatient(patient);
    } else {
      console.error('Paciente no encontrado');
    }

    return newTrackingSession;
  } catch (error) {
    console.error('Error al crear la sesión de seguimiento:', error);
    throw error;
  }
};

module.exports = {
  createTrackingSession,
};
