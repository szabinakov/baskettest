const express = require("express")
const router = express.Router();
const itemController = require("../controllers/itemcontroller")

// + route: GET api/items/listAllItems
// + desc: Lists all the items, modifies items to only show id, title, price
// + access: Public
router.get("/listAllItems", itemController.listAllItems)

// + route: POST api/items/
// + desc: Adds a new item to the basket
// + access: Public
router.post("/", itemController.addNewItem)

// + route: DELETE api/items/:itemId
// + desc: After receiving item id in request, deletes the item from basket
// + access: Public
router.delete("/:itemId", itemController.removeItemById)

// + route: DELETE api/items/
// + desc: Empties the basket
// + access: Public
router.delete("/", itemController.emptyBasket)


module.exports = router