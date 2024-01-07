const { Patient, ClinicalHistory, TrackingSession } = require("../../db");

const getPatientDetailsController = async (patientId) => {
  try {
    const patient = await Patient.findByPk(patientId, {
      include: [ClinicalHistory, TrackingSession],
      logging: console.log,
    });
    

    if (!patient) {
      console.error("Patient not found!");
      throw new Error("Patient not found!");
    }

    return { success: true, data: patient };
  } catch (error) {
    console.error("Error getting patient data:", error);
    throw {
      success: false,
      error: "Internal Server Error",
      details: error.message,
    };
  }
};

module.exports = { getPatientDetailsController };
