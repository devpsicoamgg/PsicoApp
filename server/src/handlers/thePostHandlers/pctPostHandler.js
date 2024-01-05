const createPatientHandler = (req, res) => {
  const {
    firstName,
    secondName,
    firstSurName,
    secondSurName,
    kindDoc,
    numberDoc,
    nataleDate,
    maritalStatus,
    disability,
    gender,
    occupation,
    email,
    phoneNumber,
    date,
  } = req.body;
  res
    .status(200)
    .send(
      `El paciente ${firstName} ${secondName} ${firstSurName} ${secondSurName} con ${kindDoc} número ${numberDoc}, nacido el ${nataleDate}, estado civil ${maritalStatus}, con discapacidad ${disability}, género ${gender}, ocupación ${occupation}, correo electrónico ${email}, y número de teléfono ${phoneNumber} ha sido creado exitosamente.`
    );
};

const createClinicalHistoryHandler = (req, res) => {
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
    endTime
  } = req.body;
  res
    .status(200)
    .send(
      `HC levantada para el id N° ${patientId} con éxito. El motivo de consulta refiere: "${reasonForConsultation}." Porte y apariencia: ${physicalAppearanceAndBehavior}, Orientación: ${pctOrientation}, Inteligencia: ${intelligence}, Lenguaje: ${language}, Afecto: ${affect}, Percepción sensorial: ${sensorPerception}, Actividad psicomotora: ${psychomotorActivity}, Atención (DBA): ${attentionDBA}, Memoria (DBA): ${memoryDBA}, Actitud ante la valoración: ${attitudeTowardsAssessment}, Historial de abuso sexual: ${sexualAbuse}, Ideación suicida: ${suicidalIdeation}, Plan suicida: ${suicidalPlan}, Intento suicida previo: ${suicidalAttempt}, Consumo de sustancias psicoactivas: ${substanceAbuse}, Ciclo de sueño: ${sleepCycle}, Afectividad y sexualidad: ${affectivityAndSexuality}, Alimentación: ${nutrition}, Actividad física: ${physicalActivity}, Antecedentes personales de salud mental: ${personalMentalHealthHistory}, Antecedentes familiares de salud mental: ${familyMentalHealthHistory}, Educación y empleo: ${educationAndEmployment}, Relaciones familiares: ${familyRelationships}, Observaciones del terapeuta: ${therapistObservations}, Diagnósticos principales: ${mainDiagnoses}, ${secondaryDiagnosesOne}, ${secondaryDiagnosesTwo}, ${secondaryDiagnosesThree}, Tipo de diagnóstico: ${diagnosesType}, Notas adicionales: ${additionalNotes}`
    );
};

const createTrackingSessionHandler = (req, res) => {
  const {
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
  } = req.body;

  // Puedes agregar lógica adicional aquí según sea necesario

  // Ejemplo de respuesta con algunos datos de la sesión
  res.status(200).send(`Sesión de seguimiento creada con éxito. Fecha: ${date}, Hora de inicio: ${startTime}, Hora de finalización: ${endTime}, Tipo de sesión: ${sessionType}, Notas de la sesión: ${sessionNotes}`);
};


module.exports = {
  createPatientHandler,
  createClinicalHistoryHandler,
  createTrackingSessionHandler,
};
