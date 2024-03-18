const User = require("../model/userModel");
const authUtility = require("../utility/auth");
const jwt = require("jsonwebtoken");
const manualAuth = {};

manualAuth.manualreg = async (req, res) => {
  const { email, password } = req.body;

  // console.log(email, password);

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: true, msg: "All fields are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({ error: true, msg: "User already exists" });
    }

    const hashPassword = await authUtility.genHashPassword(password);
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, msg: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, msg: "Internal Server Error" });
  }
};

module.exports = manualAuth;
