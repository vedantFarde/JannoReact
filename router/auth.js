const express = require("express");
const router = express.Router();
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config({});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.CLI_URL}`,
    failureRedirect: "/login/failed",
  })
);

router.get("/google", passport.authenticate(["profile", "email"]));
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: `${process.env.CLIF_URL}`,
    failureRedirect: "/login/failed",
  }),
  function (req, res) {
    console.log(req.user);
  }
);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login/failed",
  }),
  (req, res) => {
    const accessToken = req.user.accessToken;
    const refreshToken = req.user.refreshToken;

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });

    res.json({
      success: true,
      user: req.user,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  }
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({ error: true, msg: "login failed" });
});

router.get("/login/success", (req, res) => {
  console.log("hello", req.user);
  if (req.isAuthenticated()) {
    const userDetails = req.user;
    const refreshToken = req.user.refreshToken;
    const accessToken = req.user.accessToken;

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
    });

    res.status(200).json({
      error: false,
      msg: "login successful",
      user: userDetails,
    });
  } else {
    res.status(401).json({ error: true, msg: "login failed" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLI_URl);
});

module.exports = router;
