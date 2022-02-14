const {expect} = require("chai")
const request = require('supertest')
const app = require("../src/app")
let items = require("../data")

describe("POST /api/items", () => {
    it("Endpoint for adding an item to basket, shows statuscode 200, and checks if the last item in basket is the added item", async () => {
        const res = await request(app).post('/api/items').send({
            title: "Item10",
            price: 20,
            weight: 23,
            deliveryDay: 3,
            id: 10
        })
         expect(res.status).to.equal(200); 
         expect(res.body[res.body.length - 1].title).to.equal("Item10"); 
         expect(res.body[res.body.length - 1].price).to.equal(20); 
         expect(res.body[res.body.length - 1].weight).to.equal(23); 
         expect(res.body[res.body.length - 1].deliveryDay).to.equal(3); 
         expect(res.body[res.body.length - 1].id).to.equal(10); 

    })
})

describe("DELETE /api/items/:itemId", () => {
    it("deletes item by item id, returns 200 statuscode if success", async () => {
        const res = await request(app).delete(`/api/items/${items[2].id}`)
        expect(res.status).to.equal(200); 
        expect(res.body.length).to.equal(items.length - 1)
    })
})

describe("DELETE /api/items", () => {
    it("empty basket(items array) completely, returns 200 statuscode if success", async () => {
        const res = await request(app).delete('/api/items')
         expect(res.status).to.equal(200); 
         expect(res.body.length).to.equal(0)
    })
})