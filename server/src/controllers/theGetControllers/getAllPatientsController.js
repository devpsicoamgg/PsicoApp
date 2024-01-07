const { Patient } = require("../../db");

const getAllPatients = async (isActive) => {
  try {
    const patients = await Patient.findAll();

    return { success: true, data: patients };
  } catch (error) {
    console.error('Error getting all patients:', error);
    return { success: false, error: 'Internal server error', details: error.message };
  }
};

module.exports = { getAllPatients };