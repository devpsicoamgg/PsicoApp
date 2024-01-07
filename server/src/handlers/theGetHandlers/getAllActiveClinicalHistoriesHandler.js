const {
  getAllActiveClinicalHistories,
} = require("../../controllers/theGetControllers/getAllActiveClinicalHistoriesController");

const getAllActiveClinicalHistoriesHandler = async (req, res) => {
  try {
    const result = await getAllActiveClinicalHistories();
    res.status(200).json(result);
  } catch (error) {
    console.error(
      "Error in the handler for getting active clinical histories:",
      error
    );
    res
      .status(500)
      .json({
        success: false,
        error: "Internal Server Error",
        details: error.message,
      });
  }
};

module.exports = {
  getAllActiveClinicalHistoriesHandler,
};
