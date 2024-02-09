const { Router } = require("express");

const { createPsychoHandler } = require("../../handlers/thePostHandlers/psychoPostHandler.js");

const postPsyRouter = Router();

postPsyRouter.post("/psychologist", 
createPsychoHandler);


module.exports = postPsyRouter;
