const express = require("express")
const app = express()
const itemRouter = require("./routes/itemroutes")

app.use(express.json())

app.use("/api/items/", itemRouter);

module.exports = app