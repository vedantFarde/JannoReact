const botControlers = {};
const Bot = require("../model/botModel");
const User = require("../model/userModel");
botController.createBot = async (req, res) => {
  try {
    const userId = req.user.userID;

    // Create a new bot
    const newBot = new Bot({ createdBy: userId });
    await newBot.save();
    const botId = newBot.botId;

    // Find the user
    const user = await User.findOne({ userId: userId });

    // Update the user's botList
    if (user) {
      user.botList.push(botId); // Push the new bot's ID to botList
      await user.save(); // Save the user document
    } else {
      // If user not found, you may want to handle this case accordingly
      return res.status(404).json({ error: "User not found" });
    }

    res.status(201).json({ message: "Bot created successfully", botId });
  } catch (error) {
    console.error("Error creating bot:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = botControlers;
