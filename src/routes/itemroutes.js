const express = require("express")
const router = express.Router();

router.post("/", itemController.addNewItem)

module.exports = router