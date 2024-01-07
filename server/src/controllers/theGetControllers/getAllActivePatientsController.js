const { Patient } = require("../../db");

const getAllActivePatients = async () => {
  try {
    const activePatients = await Patient.findAll({
      where: { active: true },
    });

    return { activePatients };
  } catch (error) {
    console.error('Error getting all active patients:', error);
    return { success: false, error: 'Internal server error', details: error.message };
  }
};

module.exports = { getAllActivePatients };
