const orderController = require("../controller/orderController")

const express = require("express")
const router = express.Router()

router.post("/create/order", orderController.placeOrder)
router.get("/read/oder", orderController.readOrder)
router.get("/readtotal/oder", orderController.getTotalAmount)

module.exports = router