const express = require("express")
const router = express.Router();
const itemController = require("../controllers/itemcontroller")

router.post("/", itemController.addNewItem)

module.exports = router