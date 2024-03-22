const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config({});
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const { verifyHashPassword } = require("../utility/auth");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });

          if (!user) {
            return done(null, false, { message: "Incorrect email." });
          }
          const passwordMatch = await verifyHashPassword(password, user);

          if (!passwordMatch) {
            return done(null, false, { message: "Incorrect password." });
          }
          const userD = { userId: user.userId, email: user.email };

          const tokens = generateTokens(userD);
          console.log({ user, ...tokens });

          done(null, { user, ...tokens });
        } catch (error) {
          console.error("Error during authentication:", error);
          return done(error, false);
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLI_ID,
        clientSecret: process.env.CLI_SEC,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
        accessType: "offline",
        state: true,
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          if (!profile.emails || profile.emails.length === 0) {
            return done(new Error("Email not provided by Google"), null);
          }
          const email = profile.emails[0].value;
          let user = await User.findOne({ email });
          if (!user) {
            user = await User.create({ email, googleId: profile.id });
          }
          if (!user.googleId) {
            user.facebookId = profile.id;
            await user.save();
          }
          const tokens = generateTokens(user);
          done(null, { user, ...tokens });
        } catch (err) {
          console.error(err);
          done(err, null);
        }
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.CLIF_ID,
        clientSecret: process.env.CLIF_SEC,
        callbackURL: "/auth/facebook/callback ",
        profileFields: ["id", "displayName", "photos", "email"],
      },
      async function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        try {
          if (!profile.emails || profile.emails.length === 0) {
            return done(new Error("Email not provided by Facebook"), null);
          }
          const email = profile.emails[0].value;
          let user = await User.findOne({ email });
          if (!user) {
            user = await User.create({ email, facebookId: profile.id });
          }
          if (!user.facebookId) {
            user.facebookId = profile.id;
            await user.save();
          }
          const tokens = generateTokens(user);
          done(null, { user, ...tokens });
        } catch (err) {
          console.error(err);
          done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((user, done) => done(null, user));
};

function generateTokens(user) {
  const accessToken = jwt.sign(
    { userId: user.userId, email: user.email },
    process.env.JWT_SEC
  );
  const refreshToken = jwt.sign(
    { userId: user.userId, email: user.email },
    process.env.JWT_SEC
  );

  return { accessToken, refreshToken };
}
