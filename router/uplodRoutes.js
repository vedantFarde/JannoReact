const express = require("express");
const uplodRoutes = express.Router();
const uplodControlers = require("../controlers/uplodControlers");
const { isAuthenticated } = require("../utility/auth");

uplodRoutes.put("/uplodpdf", isAuthenticated, uplodControlers.uplodpdf);
uplodRoutes.get("/getDoc", isAuthenticated, uplodControlers.getDoc);

module.exports = uplodRoutes;
