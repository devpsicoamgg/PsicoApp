const { ClinicalHistory, Patient } = require("../../db");

const postClinicalHistory = async (
  reasonForConsultation,
  physicalAppearanceAndBehavior,
  pctOrientation,
  intelligence,
  language,
  affect,
  sensorPerception,
  psychomotorActivity,
  attentionDBA,
  memoryDBA,
  attitudeTowardsAssessment,
  sexualAbuse,
  suicidalIdeation,
  suicidalPlan,
  suicidalAttempt,
  substanceAbuse,
  sleepCycle,
  affectivityAndSexuality,
  nutrition,
  physicalActivity,
  personalMentalHealthHistory,
  familyMentalHealthHistory,
  educationAndEmployment,
  familyRelationships,
  therapistObservations,
  mainDiagnoses,
  secondaryDiagnosesOne,
  secondaryDiagnosesTwo,
  secondaryDiagnosesThree,
  diagnosesType,
  additionalNotes,
  date,
  startTime,
  endTime,
  patientId
) => {
    try {

      await ClinicalHistory.update(
        { isActive: false },
        {
          where: {
            PatientId: patientId,
            isActive: true,
          },
        }
      );

      const formattedDate = new Date(date).toISOString().split('T')[0];
    const newClinicalHistory = await ClinicalHistory.create({
      reasonForConsultation,
      physicalAppearanceAndBehavior,
      pctOrientation,
      intelligence,
      language,
      isActive: true, 
      affect,
      sensorPerception,
      psychomotorActivity,
      attentionDBA,
      memoryDBA,
      attitudeTowardsAssessment,
      sexualAbuse,
      suicidalIdeation,
      suicidalPlan,
      suicidalAttempt,
      substanceAbuse,
      sleepCycle,
      affectivityAndSexuality,
      nutrition,
      physicalActivity,
      personalMentalHealthHistory,
      familyMentalHealthHistory,
      educationAndEmployment,
      familyRelationships,
      therapistObservations,
      mainDiagnoses,
      secondaryDiagnosesOne,
      secondaryDiagnosesTwo,
      secondaryDiagnosesThree,
      diagnosesType,
      additionalNotes,
      date: formattedDate,
      startTime,
      endTime,
    });

    const patient = await Patient.findByPk(patientId);

    if (patient) {
      await newClinicalHistory.setPatient(patient);
    } else {
      console.error('Paciente no encontrado');
    }

    return newClinicalHistory;
  } catch (error) {

    console.error('Error al crear historia clínica:', error);
    throw error; 
  }
};

module.exports = {
  postClinicalHistory,
};
