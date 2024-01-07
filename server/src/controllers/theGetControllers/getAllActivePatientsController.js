const { Patient } = require("../../db");

const getAllActivePatients = async () => {
  try {
    const activePatients = await Patient.findAll({
      where: { active: true },
    });

    return { activePatients };
  } catch (error) {
    console.error('Error al obtener todos los pacientes activos:', error);
    return { success: false, error: 'Error interno del servidor', details: error.message };
  }
};

module.exports = { getAllActivePatients };
