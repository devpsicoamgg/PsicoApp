const { Router } = require("express");

const {
  getAllPatientsHandler,
  getTrackingSessionsHandler,
} = require("../../handlers/theGetHandlers/getAllPatientsHandler.js");

const {
  getAllActiveClinicalHistoriesHandler,
} = require("../../handlers/theGetHandlers/getAllActiveClinicalHistoriesHandler.js");

const {
  getAllClinicalHistoriesHandler,
} = require("../../handlers/theGetHandlers/getAllClinicalHistoriesHandler.js");

const {
  getAllActivePatientsHandler,
} = require("../../handlers/theGetHandlers/getAllActivePatientsHandler.js");

const {
  getPatientDetailsHandler,
} = require("../../handlers/theGetHandlers/getPatientDetailsHandler.js");

const getPatientsRouter = Router();

getPatientsRouter.get("/patients", getAllPatientsHandler);

getPatientsRouter.get("/patients/active", getAllActivePatientsHandler);

getPatientsRouter.get(
  "/patients/clinical-histories/active",
  getAllActiveClinicalHistoriesHandler
);

getPatientsRouter.get("/patients/:patientId", getPatientDetailsHandler);

getPatientsRouter.get(
  "/patients/:patientId/clinical-histories",
  getAllClinicalHistoriesHandler
);

getPatientsRouter.get(
  "/patients/:patientId/tracking-sessions",
  getTrackingSessionsHandler
);

module.exports = getPatientsRouter;
