const { getTrackingSessions } = require('../../controllers/theGetControllers/getTrackingSessionsController');


const getTrackingSessionsHandler = async (req, res) => {
  const { patientId } = req.params;

  const result = await getTrackingSessions(patientId);
  if (result.success) {
    res.status(200).json(result.trackingSessions);
  } else {
    res.status(404).json({ message: result.message });
  }
};

module.exports = {
  getTrackingSessionsHandler,
};