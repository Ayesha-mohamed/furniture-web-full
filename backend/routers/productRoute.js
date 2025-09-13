const productController = require('../controller/productController');
const express = require('express');
const uploadProduct =  require("../middleware/uploadpdoructImg")

const router = express.Router();

router.post("/create/product",uploadProduct.single("prImg"), productController.createProduct)
router.get("/read/allproduct", productController.readAllProduct)
router.get("/read/singleproduct", productController.readSingleProduct)
router.put("/update/product", productController.updateProduct)
router.delete("/delete/product", productController.deleteProduct)

module.exports = router;