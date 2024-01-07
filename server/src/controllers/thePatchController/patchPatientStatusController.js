
const { Patient, ClinicalHistory } = require("../../db");


const togglePatientStatus = async (patientId, active) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (patient) {
      const currentPatientState = patient.active;
      const clinicalHistories = await ClinicalHistory.findAll({ where: { PatientId: patientId } });

      if (!active) {
        await ClinicalHistory.update({ isActive: false }, { where: { PatientId: patientId } });
      }

      await patient.update({ active });

      // Si el paciente estaba desactivado y se está activando, activar las historias clínicas
      if (!currentPatientState && active) {
        await ClinicalHistory.update({ isActive: false }, { where: { PatientId: patientId } });
      }

      const action = active ? 'activado' : 'desactivado';
      return { success: true, message: `El paciente con ID ${patientId} ha sido ${action}.` };
    } else {
      return { success: false, message: `No se encontró al paciente con ID ${patientId}.` };
    }
  } catch (error) {
    console.error(`Error al ${active ? 'activar' : 'desactivar'} al paciente:`, error);
    return { success: false, message: 'Error interno del servidor' };
  }
};

module.exports = {
  togglePatientStatus,
};