const express = require("express")
const router = express.Router();
const itemController = require("../controllers/itemcontroller")

router.get("/listAllItems", itemController.listAllItems)

router.post("/", itemController.addNewItem)

router.delete("/:itemId", itemController.removeItemById)

router.delete("/", itemController.emptyBasket)


module.exports = router