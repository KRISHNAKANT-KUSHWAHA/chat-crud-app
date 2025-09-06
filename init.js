const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// connection setup to mongoose
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("failed", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priyanka",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "cutie",
    to: "priyanka",
    msg: "send me yours notes",
    created_at: new Date(),
  },
  {
    from: "sneha",
    to: "mukesh",
    msg: "you are handsome",
    created_at: new Date(),
  },
  { from: "mukesh", to: "sneha", msg: "Thanks babe", created_at: new Date() },
];

Chat.insertMany(allChats)
  .then(() => {
    console.log(" All Data inserted");
  })
  .catch((err) => console.log(err));

// Initialisation database  and this file run  only one time  by cammand node init.js.
// if by mistake you delete the database data from  cmd  and run this file again to recover all data
