const { ClinicalHistory, Patient } = require("../../db");

const getClinicalHistories = async (patientId) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      console.error('Paciente no encontrado');
      throw new Error('Paciente no encontrado');
    }

    const clinicalHistories = await ClinicalHistory.findAll({
      where: { PatientId: patientId },
    });

    // Agregar el nombre del paciente al principio de los resultados
    const patientName = `${patient.firstName} ${patient.secondName || ''} ${patient.firstSurName} ${patient.secondSurName || ''}`;
    
    return { success: true, data: { patient: { id: patient.id, name: patientName, document: patient.numberDoc }, clinicalHistories } };
  } catch (error) {
    console.error('Error al obtener historias clínicas:', error);
    throw { success: false, error: 'Error interno del servidor', details: error.message };
  }
};

module.exports = { getClinicalHistories };


