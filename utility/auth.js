const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const authUtility = {};

authUtility.isAuthenticated = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  console.log(refreshToken);
  if (!refreshToken || authUtility.isTokenExpired(refreshToken)) {
    return res
      .status(401)
      .json({ error: true, msg: "Refresh token missing or expired" });
  }

  const accessToken = req.cookies.accessToken;
  if (!accessToken || authUtility.isTokenExpired(accessToken)) {
    try {
      const newAccessToken = await authUtility.refreshAccessToken(refreshToken);
      if (newAccessToken) {
        res.cookie("accessToken", newAccessToken, {
          maxAge: 15 * 60 * 1000,
          httpOnly: true,
        });
      } else {
        return res
          .status(500)
          .json({ error: true, msg: "Failed to refresh access token" });
      }
    } catch (error) {
      console.error("Error refreshing access token:", error);
      return res
        .status(500)
        .json({ error: true, msg: "Failed to refresh access token" });
    }
  }

  const profile = decodeToken(refreshToken);
  console.log(profile);
  req.user = profile;
  next();
};

authUtility.isTokenExpired = (Token) => {
  if (!Token) {
    return true;
  }
  const decodedToken = decodeToken(Token);
  if (!decodedToken) {
    return true;
  }
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken.exp < currentTime;
};

const decodeToken = (Token) => {
  try {
    const decoded = jwt.verify(Token, process.env.JWT_SEC);
    return decoded;
  } catch (error) {
    console.error("Error decoding access token:", error);
    return null;
  }
};

authUtility.refreshAccessToken = async (refreshToken) => {
  try {
    const decodedRefreshToken = jwt.verify(refreshToken, process.env.JWT_SEC);
    const newAccessToken = generateAccessToken(decodedRefreshToken);
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return null;
  }
};

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT_SEC);
};

authUtility.genHashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
};

authUtility.verifyHashPassword = async (password, user) => {
  try {
    const match = await bcrypt.compare(password, user.password);
    return match;
  } catch (error) {
    console.error("Error verifying password:", error);
    throw error;
  }
};

module.exports = authUtility;
