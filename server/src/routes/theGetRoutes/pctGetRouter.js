const { Router } = require("express");

const {
  getAllPatientsHandler,
  getPatientDetailsHandler,
  getClinicalHistoriesHandler,
  getTrackingSessionsHandler,
} = require("../../handlers/theGetHandlers/pctGetHandler.js");

const getPatientsRouter = Router();

getPatientsRouter.get("/patients", getAllPatientsHandler);
getPatientsRouter.get("/patients/:patientId", getPatientDetailsHandler);
getPatientsRouter.get(
  "/patients/:patientId/clinical-history",
  getClinicalHistoriesHandler
);
getPatientsRouter.get(
  "/patients/:patientId/tracks",
  getTrackingSessionsHandler
);

module.exports = getPatientsRouter;
