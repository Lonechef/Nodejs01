const express = require('express')

const router = require("./routes/user")

const { connectMongoDb } = require("./connection")
// Importing the Users

const { logReqRes } = require("./middlewares/middle") // Assuming correct export

const app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://localhost:27017/project01db").then(() => console.log("Mongodb connected"))

// Schema (implementation needed)

// Middleware Plugin
app.use(express.urlencoded({ extended: false }))
//app.use(logReqRes("log.txt")) // Use middleware once

// Routes
app.use("/api/users", router)

app.listen(PORT, () => console.log('Server Started Listening'));
