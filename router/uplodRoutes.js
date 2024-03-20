const express = require("express");
const uplodRoutes = express.Router();
const uplodControlers = require("../controlers/uplodControlers");
const { isAuthenticated } = require("../utility/auth");

uplodRoutes.put("/uplodpdf", isAuthenticated, uplodControlers.uplodpdf);
uplodRoutes.get("/getdoc", isAuthenticated, uplodControlers.getdoc);
uplodRoutes.put("/uplodtext", isAuthenticated, uplodControlers.uplodtext);
uplodRoutes.post("/getpreview", isAuthenticated, uplodControlers.getpreview);
uplodRoutes.post("/getdelete", isAuthenticated, uplodControlers.DeleteDoc);

module.exports = uplodRoutes;
