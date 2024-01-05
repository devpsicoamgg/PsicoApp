const { Router } = require("express");
const getPatientsRouter = require("./theGetRoutes/getRouter");
const patchPatientRouter = require("./thePatchRoutes/patchRouter");
const postPatientRouter = require("./thePostRoutes/postRouter");

const mainRouterManager = Router();

mainRouterManager.use("/", getPatientsRouter)
mainRouterManager.use("/", postPatientRouter)
mainRouterManager.use("/", patchPatientRouter)




module.exports = mainRouterManager;
