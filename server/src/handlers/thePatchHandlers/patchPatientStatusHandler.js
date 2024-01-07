const { togglePatientStatus } = require("../../controllers/thePatchController/patchPatientStatusController");

const patchPatientStatusHandler = async (req, res) => {
  const { patientId } = req.params;
  const { active } = req.body;

  if (active === undefined) {
    return res.status(400).json({ success: false, message: 'Parámetro "active" no proporcionado en el cuerpo de la solicitud.' });
  }

  const result = await togglePatientStatus(patientId, active);
  res.json(result);
};

module.exports = {
  patchPatientStatusHandler,
};
