const postTrackingSession = require('../../controllers/thePostController/postTrackingSessionController');

const createTrackingSessionHandler = async (req, res) => {
  try {
    const { patientId } = req.params;
    const {
      idPcte,
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
        idPcte,
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
    } catch (error) {
      console.error('Error en el manejador de la sesión de seguimiento:', error);
      res.status(500).json({ success: false, error: 'Error interno del servidor' });
    }
  } catch (error) {
    console.error('Error en el manejador de la sesión de seguimiento:', error);
    res.status(500).json({ success: false, error: 'Error interno del servidor' });
  }
};

module.exports = {
  createTrackingSessionHandler,
};
