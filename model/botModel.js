const mongoose = require("mongoose");
const uuid = require("uuid");

const botSchema = new mongoose.Schema({
  botId: {
    type: String,
    default: uuid.v4,
    unique: true,
    required: true,
  },
  botName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  version: {
    type: String,
  },
  // createdBy: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Group",
  //   },
  // ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Bot = mongoose.model("Bot", botSchema);
module.exports = Bot;
