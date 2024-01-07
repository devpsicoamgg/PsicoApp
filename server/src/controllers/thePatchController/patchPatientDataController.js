const { Patient } = require("../../db");

const updateDataPatient = async (patientId, updatedData) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      return { success: false, message: `No se encontró al paciente con ID ${patientId}.` };
    }

    await patient.update(updatedData);

    return { success: true, message: `Datos del paciente con ID ${patientId} modificados con éxito.` };
  } catch (error) {
    console.error('Error al actualizar los datos del paciente:', error);
    return { success: false, message: 'Error interno del servidor' };
  }
};

module.exports = {
  updateDataPatient,
};