const { Router } = require("express");

const {
  patchPatientHandler,
} = require("../../handlers/thePatchHandlers/patchPatientDataHandler.js");
const { patchPatientStatusHandler } = require("../../handlers/thePatchHandlers/patchPatientStatusHandler.js");

const patchPatientRouter = Router();

patchPatientRouter.patch("/patients/:patientId", patchPatientHandler);
patchPatientRouter.patch("/patients/:patientId/deactivate", patchPatientStatusHandler)


module.exports = patchPatientRouter;
