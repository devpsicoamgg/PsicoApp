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
      console.error("Patient or clinical history not found");
      throw new Error("Patient or clinical history not found");
    }

    if (!patient.active || !clinicalHistory.isActive) {
      console.error("The patient or clinical history is not active");
      throw new Error("The patient or clinical history is not active");
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
    console.error("Error creating the tracking session:", error);
    throw error;
  }
};

module.exports = postTrackingSession;
