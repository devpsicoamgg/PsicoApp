const { Router } = require("express");

const {
  getAllPatientsHandler,
  getPatientDetailsHandler,
  getClinicalHistoriesHandler,
  getTrackingSessionsHandler,
} = require("../../handlers/theGetHandlers/getAllPatientsHandler.js");
const {
  getAllActiveClinicalHistoriesHandler,
} = require("../../handlers/theGetHandlers/getAllActiveClinicalHistoriesHandler.js");
const { getAllActivePatientsHandler } = require("../../handlers/theGetHandlers/getAllActivePatientsHandler.js");

const getPatientsRouter = Router();

getPatientsRouter.get("/patients", getAllPatientsHandler);
getPatientsRouter.get("/patients/active", getAllActivePatientsHandler);
getPatientsRouter.get(
  "/patients/clinical-histories/active",
  getAllActiveClinicalHistoriesHandler
);
getPatientsRouter.get("/patients/:patientId", getPatientDetailsHandler);
getPatientsRouter.get(
  "/patients/:patientId/clinical-history",
  getClinicalHistoriesHandler
);
getPatientsRouter.get(
  "/patients/:patientId/tracking-sessions",
  getTrackingSessionsHandler
);

module.exports = getPatientsRouter;
