const { Router } = require("express");
const getPatientsRouter = require("./theGetRoutes/pctGetRouter");
const patchPatientRouter = require("./thePatchRoutes/pctPatchRouter");
const postPatientRouter = require("./thePostRoutes/pctPostRouter");

const mainRouterManager = Router();

mainRouterManager.use("/", getPatientsRouter)
mainRouterManager.use("/", postPatientRouter)
mainRouterManager.use("/", patchPatientRouter)




module.exports = mainRouterManager;
