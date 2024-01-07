const { Patient } = require("../../db");

const updateDataPatient = async (patientId, updatedData) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (!patient) {
      return {
        success: false,
        message: `Patient with ID ${patientId} not found.`,
      };
    }

    await patient.update(updatedData);

    return {
      success: true,
      message: `Patient data with ID ${patientId} successfully updated.`,
    };
  } catch (error) {
    console.error("Error updating patient data:", error);
    return { success: false, message: "Internal server error" };
  }
};

module.exports = {
  updateDataPatient,
};
