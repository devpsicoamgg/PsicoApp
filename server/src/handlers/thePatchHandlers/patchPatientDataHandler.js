

const { updateDataPatient } = require("../../controllers/thePatchController/patchPatientDataController");

const patchPatientHandler = async (req, res) => {
  const { patientId } = req.params;
  const updatedData = req.body;

  const result = await updateDataPatient(patientId, updatedData);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(404).json({ message: result.message });
  }
};

module.exports = {
  patchPatientHandler,
};

