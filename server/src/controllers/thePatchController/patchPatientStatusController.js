const { Patient, ClinicalHistory } = require("../../db");

const togglePatientStatus = async (patientId, active) => {
  try {
    const patient = await Patient.findByPk(patientId);

    if (patient) {
      const currentPatientState = patient.active;
      const clinicalHistories = await ClinicalHistory.findAll({
        where: { PatientId: patientId },
      });

      if (!active) {
        await ClinicalHistory.update(
          { isActive: false },
          { where: { PatientId: patientId } }
        );
      }

      await patient.update({ active });

      // If the patient was inactive and is being activated, activate the clinical histories
      if (!currentPatientState && active) {
        await ClinicalHistory.update(
          { isActive: true },
          { where: { PatientId: patientId } }
        );
      }

      const action = active ? "activated" : "deactivated";
      return {
        success: true,
        message: `Patient with ID ${patientId} has been ${action}.`,
      };
    } else {
      return {
        success: false,
        message: `Patient with ID ${patientId} not found.`,
      };
    }
  } catch (error) {
    console.error(
      `Error ${active ? "activating" : "deactivating"} the patient:`,
      error
    );
    return { success: false, message: "Internal server error" };
  }
};

module.exports = {
  togglePatientStatus,
};
