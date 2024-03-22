const express = require("express");
const botRouter = express.Router();
const botControlers = require("../controlers/botControlers");

botRouter.post("/createBot", botControlers.createBot);
botRouter.post("/addDataToBotd", () => {});
// botRouter.post("/createBot", () => {});

module.exports = botRouter;
