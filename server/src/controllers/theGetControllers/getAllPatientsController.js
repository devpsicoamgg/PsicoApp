const { Patient } = require("../../db");

const getAllPatients = async (isActive) => {
  try {
    const patients = await Patient.findAll();

    return { success: true, data: patients };
  } catch (error) {
    console.error('Error al obtener todos los pacientes:', error);
    return { success: false, error: 'Error interno del servidor', details: error.message };
  }
};

module.exports = { getAllPatients };