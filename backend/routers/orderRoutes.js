const orderController = require("../controller/orderController")

const express = require("express")
const router = express.Router()

router.post("/create/order", orderController.placeOrder)


module.exports = router