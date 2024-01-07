const postTrackingSession = require('../../controllers/thePostController/postTrackingSessionController');

const createTrackingSessionHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const {
      idClinicalHistory,
      date,
      startTime,
      endTime,
      sessionType,
      sessionNotes,
      therapistObservations,
      challengesEncountered,
      goalsAchieved,
      treatmentPlanAdjustments,
      moodRating,
      sessionRating,
      additionalNotes,
    } = req.body;

    try {
      const response = await postTrackingSession(
        patientId,
        idClinicalHistory,
        date,
        startTime,
        endTime,
        sessionType,
        sessionNotes,
        therapistObservations,
        challengesEncountered,
        goalsAchieved,
        treatmentPlanAdjustments,
        moodRating,
        sessionRating,
        additionalNotes,
        res
      );

      res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.error('Error en el manejador de la sesión de seguimiento:', error);
      res.status(500).json({ success: false, error: 'Error interno del servidor', details: error.message });
    }
  } catch (error) {
    console.error('Error en el manejador de la sesión de seguimiento:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor', details: error.message });
  }
};

module.exports = {
  createTrackingSessionHandler,
};
