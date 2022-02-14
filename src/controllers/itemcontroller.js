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