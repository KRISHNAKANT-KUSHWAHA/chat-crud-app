

# Chat CRUD App

A simple **backend project** built with **Node.js, Express, and MongoDB (Mongoose)** to perform CRUD (Create, Read, Update, Delete) operations on chats.  

## 🚀 Features
- Create new chats
- View all chats
- Edit existing chats
- Delete chats (with confirmation popup)
- EJS templates for UI
- MongoDB for database storage
- Method override for PUT and DELETE requests

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Templating Engine**: EJS  
- **Middleware**: Method-Override  

## 📂 Project Structure
├── models/ # Mongoose models
│ └── Chat.js
├── public/ # Static files (JS, CSS)
│ └── js/confirmDelete.js
├── views/ # EJS templates
│ ├── index.ejs
│ ├── new.ejs
│ └── edit.ejs
├── index.js # Main server file
├── package.json # Dependencies and scripts

🎯 Future Improvements

Add user authentication

Add real-time chat with Socket.io

Improve UI with Tailwind or Bootstrap


👨‍💻 Author: Krishnakant Kushwaha
📌 Built as a practice project for learning Express + MongoDB CRUD operations

