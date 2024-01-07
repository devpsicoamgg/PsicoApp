const {
  getClinicalHistories,
} = require("../../controllers/theGetControllers/getAllClinicalHistoriesController");

const getAllClinicalHistoriesHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const response = await getClinicalHistories(patientId);
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in the handler to get clinical histories:", error);
    res
      .status(500)
      .json({
        success: false,
        error: "Internal server error",
        details: error.message,
      });
  }
};

module.exports = { getAllClinicalHistoriesHandler };
