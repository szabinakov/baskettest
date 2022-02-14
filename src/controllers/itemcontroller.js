
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