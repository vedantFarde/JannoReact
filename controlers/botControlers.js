const botControlers = {};
const Bot = require("../model/botModel");
const User = require("../model/userModel");
const { Types } = require("mongoose"); // Import Types from mongoose

botControlers.createBot = async (req, res) => {
  try {
    const userId = req.user.userID;
    const botName = req.botName;

    // const userId = "dd74451c-9eec-418e-9ae2-30d74a8e2c52";
    // const botName = "alasjbdjhasgigfiai gaagsif";

    const user = await User.findOne({ userId: userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new bot
    const newBot = new Bot({ botName: botName, createdBy: user.userId });
    await newBot.save();

    const botId = newBot._id;

    // Update the user's botList
    user.botList.push(botId);
    await user.save();

    res.status(201).json({ message: "Bot created successfully", newBot });
  } catch (error) {
    console.error("Error creating bot:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

botControlers.addDataToBotd = async (req, res) => {
  try {
    // const List = req.List;
    const List = [
      "dd74451c-9eec-418e-9ae2-30d74a8e2c52/html/en.wikipedia.org",
      "dd74451c-9eec-418e-9ae2-30d74a8e2c52/pdf/Internship Letter - Konverge AI_Vedant Farde.PDF",
    ];
    //const botId = req.botId;
    const botId = "4f5095bf-3086-4d05-a61a-85480b165670";

    const bot = await Bot.findOne({ botId: botId });
    if (!bot) {
      return res.status(404).json({ error: "bot not found" });
    }

    for (let i of List) {
      bot.resources.push(i);
    }
    await bot.save();
    res.status(200).json({ message: "Data added to bot successfully" });
  } catch (error) {
    console.error("Error creating bot:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = botControlers;
