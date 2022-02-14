let items = require("../../data")

let basket = []

exports.addNewItem = async(req,res) => {
    try{
        const newItem = req.body
        basket.push(newItem)
        res.status(200).json(basket)
    }catch(error){
        res.status(500).json({ error: "Internal Server Error"})
    }
}

exports.removeItemById = async(req,res) => {
    const id = req.params.itemId

    try{
        // filters through items already in basket
        // function deletes item where id matches the id sent in request parameter and send back new array, please NOTE this logic sends back the array untouched when there was nothing to remove!!!
        const newBasket = items.filter(element => {
            return element.id !== parseInt(id)
        })
        res.status(200).json(newBasket)
    }catch(error){
        res.status(500).json({ error: "Internal Server Error"})
    }
}


exports.emptyBasket = (_,res) => {
    // for presentation using items from data.js
    try{    
        items = []
        res.status(200).json(items)
    } catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
}

exports.listAllItems = (_,res) => {
    try {
        class Item {
            constructor(id, title, price){
                this.id = id;
                this.title = title;
                this.price = price
            }
        }
        // Used items from data.js to present some data
        let allItems = items.map((element) =>{
            return new Item(element.id, element.title, element.price)
        })
        res.status(200).json(allItems)
    } catch(error){
        res.status(500).json({error: "Internal Server Error"})
    }
}