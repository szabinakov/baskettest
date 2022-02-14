const {expect} = require("chai")
const request = require('supertest')
const app = require("../src/app")

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