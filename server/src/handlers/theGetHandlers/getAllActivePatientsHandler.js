const {
  getAllActivePatients,
} = require("../../controllers/theGetControllers/getAllActivePatientsController");

const getAllActivePatientsHandler = async (req, res) => {
  try {
    const activePatients = await getAllActivePatients();
    res.status(200).json({ success: true, data: activePatients });
  } catch (error) {
    console.error("Error in the handler to get all active patients:", error);
    res
      .status(500)
      .json({
        success: false,
        error: "Internal server error",
        details: error.message,
      });
  }
};

module.exports = {
  getAllActivePatientsHandler,
};
