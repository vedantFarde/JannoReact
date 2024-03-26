const express = require("express");
const botRouter = express.Router();
const botControlers = require("../controlers/botControlers");
const authUtility = require("../utility/auth");

botRouter.get(
  "/createBot",
  authUtility.isAuthenticated,
  botControlers.createBot
);
botRouter.get(
  "/addDataToBotd",
  authUtility.isAuthenticated,
  botControlers.addDataToBotd
);
// botRouter.post("/createBot", () => {});

module.exports = botRouter;
