const { ClinicalHistory, Patient } = require("../../db");

const getAllActiveClinicalHistories = async () => {
  try {
    const activeClinicalHistories = await ClinicalHistory.findAll({
      where: { isActive: true },
      include: {
        model: Patient,
        attributes: ["firstName", "secondName", "firstSurName", "secondSurName", "numberDoc"],
      },
    });

    const formattedData = activeClinicalHistories.map(history => {
      const { Patient: patient, ...restHistory } = history.get();
      return {
        patient: {
          firstName: patient.firstName,
          secondName: patient.secondName,
          firstSurName: patient.firstSurName,
          secondSurName: patient.secondSurName,
          numberDoc: patient.numberDoc,
        },
        clinicalHistory: restHistory,
      };
    });

    return { success: true, data: formattedData };
  } catch (error) {
    console.error('Error getting all clinical histories:', error);
    return { success: false, error: 'Internal server error', details: error.message };
  }
};

module.exports = { getAllActiveClinicalHistories };
