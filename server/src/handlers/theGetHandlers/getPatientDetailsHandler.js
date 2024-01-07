const {
  getPatientDetailsController,
} = require("../../controllers/theGetControllers/getPatientDetailsController");

const getPatientDetailsHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const response = await getPatientDetailsController(patientId);
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error("Error in the handler to get patient details:", error);
    res
      .status(500)
      .json({
        success: false,
        error: "Internal server error",
        details: error.message,
      });
  }
};

module.exports = { getPatientDetailsHandler };
