const { Router } = require("express");

const {
  patchPatientHandler,
} = require("../../handlers/thePatchHandlers/pctPatchHandler.js");

const patchPatientRouter = Router();

patchPatientRouter.patch("/patients/:patientId", patchPatientHandler);

module.exports = patchPatientRouter;
