const { Router } = require("express");

const { createPatientHandler } = require("../../handlers/thePostHandlers/patientPostHandler.js");
const { createClinicalHistoryHandler } = require("../../handlers/thePostHandlers/clinicalHistoryPostHandler.js");
const { createTrackingSessionHandler } = require("../../handlers/thePostHandlers/trackingSessionsPostHandler.js");


const postPatientRouter = Router();

postPatientRouter.post("/patients", 
createPatientHandler);

postPatientRouter.post(
  "/patients/:patientId/clinical-history",
  createClinicalHistoryHandler
);

postPatientRouter.post(
  "/patients/:patientId/tracks",
  createTrackingSessionHandler
);

module.exports = postPatientRouter;
