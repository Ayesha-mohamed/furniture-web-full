const express = require("express");
const router = express.Router();
const descController = require("../models/descrModel");
const createdescrip = async (req, res) => {
    try {
        const {  name, id, product,color } = req.body;

        const newProduct = productSchema({
            name: name,
            price: price,
            description: description,
            prImage: prImage,
           
            prImage: req.file ? req.file.filename : undefined
        })

        await newProduct.save();
        res.send(newProduct)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// GET single product by ID
router.get("/:id", async (req, res) => {
  try {
    const description = await description.findById(req.params.id);
    if (!description) return res.status(404).json({ message: "description not found" });
    res.json(description);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = {createdescrip,}
