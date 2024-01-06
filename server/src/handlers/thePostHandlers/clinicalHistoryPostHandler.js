const { postClinicalHistory } = require("../../controllers/thePostController/postClinicalHistoryController");
const { ClinicalHistory, Patient } = require("../../db");

const createClinicalHistoryHandler = async (req, res) => {
  const { patientId } = req.params;
  const {
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
  } = req.body;

  try {
    // Verifica si el paciente existe
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      console.error('Paciente no encontrado');
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    // Llama a la función que crea la historia clínica
    const response = await postClinicalHistory(
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
    );

    res.status(200).send(
      `La HC para el pcte con Id No ${patientId} ha sido creado exitosamente con fecha del ${response.date} de ${startTime} a ${endTime}.`
    );
  } catch (error) {
    console.error('Error en el controlador de historias clínicas:', error);
    res.status(500).json({ error: 'Error interno del servidor', details: error.message });
  }
};

module.exports = {
  createClinicalHistoryHandler,
};
