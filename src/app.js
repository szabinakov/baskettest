const express = require("express")
const app = express()

app.use(express.json())

app.use("/api/items/", itemRouter);

module.exports = app