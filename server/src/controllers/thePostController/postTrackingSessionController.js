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
  additionalNotes
) => {
  try {
    const patient = await Patient.findByPk(patientId, {
      attributes: ["id", "active"],
    });
    const clinicalHistory = await ClinicalHistory.findByPk(idClinicalHistory);

    if (!patient || !clinicalHistory) {
      console.error("Paciente o historia clínica no encontrados");
      throw new Error("Paciente o historia clínica no encontrados");
    }

    if (!patient.active || !clinicalHistory.isActive) {
      console.error("El paciente o la historia clínica no están activos");
      throw new Error("El paciente o la historia clínica no están activos");
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

    await newTrackingSession.setPatient(patient);
    await newTrackingSession.setClinicalHistory(clinicalHistory);

    return newTrackingSession;
  } catch (error) {
    console.error("Error al crear la sesión de seguimiento:", error);
    throw error;
  }
};

module.exports = postTrackingSession;
