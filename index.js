const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override"); // use for sending put and  delete request from form

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // parse the data to create new chat
app.use(methodOverride("_method"));

// Disable CSP for development
app.use((req, res, next) => {
  res.removeHeader("Content-Security-Policy");
  next();
});

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("connection failed", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1=new chat({
//   from:"neha",
//   to:"priyanka",
//   msg:"send me your exam sheets",
//   created_at:new Date() //UTC
// })
// chat1.save()
// .then((res)=>{
//   console.log(res);
// })

// index Route->show all chats
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.send(" working ");
  res.render("index.ejs", { chats });
});

// new route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create newchat route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body; // here by data parsing
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  console.log(newChat);
  // res.send("working");
  newChat // note :  the save function is asynchronous. anything  creating ,update, deleting..etc in database or jha pr then use hota he wha pr await likhn ki jarurat nhi hoti
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

// Edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id); // chat ko database ke andr search kr rhe on basis of id(search krna-asynchronous)
  res.render("edit.ejs", { chat });
});

// update route  (run after chat submit from edit.ejs put request send here)
app.put("/chat/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  console.log(newMsg);
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true } // optionals
  );

  console.log("Updated chat",updatedChat);
  res.redirect("/chats");
});


//destroy route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  console.log("deleted chat:",deletedChat);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  res.send("root is working of mongoose");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});


// find() is a asynchronous function which return promises so we use await and async
