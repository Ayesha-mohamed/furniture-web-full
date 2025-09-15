const productSchema = require("../models/productModel")


// add product
const createProduct = async (req, res) => {
    try {
        const { name, price, description, prImage, category } = req.body;

        const newProduct = productSchema({
            name: name,
            price: price,
            description: description,
            prImage: prImage,
            category: category,
            prImage: req.file ? req.file.filename : undefined
        })

        await newProduct.save();
        res.send(newProduct)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//read
const readAllProduct = async (req, res) =>{
    try {
        const products = await productSchema.find()
        res.send(products)

        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//read single product
const readSingleProduct = async (req, res) =>{
    try {
        const readSingleProduct = await productSchema.findById(req.params.id)
        if(readSingleProduct){
            res.send(readSingleProduct)
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//update product
const updateProduct = async (req, res) =>{
    try {
        const { name, price, description, category } = req.body;
        const updateProduct = await productSchema.updateOne(
            {_id: req.params.id},
            {$set: {
                name: name,
                price: price,
                description: description,
                category: category,
                prImage: req.file ? req.file.filename : undefined
            }}
        )

        if(updateProduct){
            res.send(updateProduct)
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//delete
const deleteProduct = async (req, res) =>{
    try {
        const deleteProduct = await productSchema.deleteOne({id: req.params_id})
        if(deleteProduct){
            res.send(deleteProduct)
        }
        
    } catch (error) {
        
    }
}


//search product
const searchProduct = async (req, res) =>{
    try {
        const searchProduct = await productSchema.find({
            $or: [
                {name: {$regex: req.params.key}},
                {category: {$regex: req.params.key}},
                // {price: {$regex: req.params.key}}
            ]
        })
        if(searchProduct){
            res.send(searchProduct)
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { createProduct, readAllProduct, updateProduct, readSingleProduct, deleteProduct, searchProduct}