const mongoose = require("mongoose");
const uuid = require("uuid");

const groupSchema = new mongoose.Schema({
  groupId: {
    type: String,
    default: uuid.v4,
    unique: true,
    required: true,
  },
  groupName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  resources: [
    {
      htmlBucket: {
        type: Buffer,
      },
      pdfBucket: {
        type: Buffer,
      },
      textBucket: {
        type: Buffer,
      },
      docBucket: {
        type: Buffer,
      },
      uploadedByUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
