const mongoose = require("mongoose");

//define schema
const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 100,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema); //we need to convert our chatSchema into a Model we can work with

module.exports = Chat;

// NOTE:
// if information or message which is  not part of schema  than not store in mongo db
