const { ClinicalHistory, Patient } = require("../../db");

const getClinicalHistories = async (patientId) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      console.error('Patient not found');
      throw new Error('Patient not found');
    }

    const clinicalHistories = await ClinicalHistory.findAll({
      where: { PatientId: patientId },
    });

    // Agregar el nombre del paciente al principio de los resultados
    const patientName = `${patient.firstName} ${patient.secondName || ''} ${patient.firstSurName} ${patient.secondSurName || ''}`;
    
    return { success: true, data: { patient: { id: patient.id, name: patientName, document: patient.numberDoc }, clinicalHistories } };
  } catch (error) {
    console.error('Error getting clinical histories:', error);
    throw { success: false, error: 'Internal server error', details: error.message };
  }
};

module.exports = { getClinicalHistories };


