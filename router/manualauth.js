const express = require("express");
const userRoutes = express.Router();
const manualAuth = require("../controlers/manualUserSetup");
userRoutes.post("/manualreg", manualAuth.manualreg);

module.exports = userRoutes;
