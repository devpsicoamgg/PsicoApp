const { Router } = require('express'); 

const { 
  createPatientHandler,
  createClinicalHistoryHandler, 
  createTrackingSessionHandler,
} = require('../../handlers/thePostHandlers/pctPostHandler.js');

const postPatientRouter = Router();



postPatientRouter.post("/patients", createPatientHandler);
postPatientRouter.post("/patients/:patientId/clinical-history", createClinicalHistoryHandler);
postPatientRouter.post("/patients/:patientId/tracks", createTrackingSessionHandler);

module.exports = postPatientRouter;
