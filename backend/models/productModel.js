const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);


const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    prImage: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    // status: {
    //     type: String,
    //     enum: ['In Stock', 'Out of Stock'],
    //     default: 'In Stock'
        
    // }

   

}, { timestamps: true }) 

productSchema.plugin(AutoIncrement, { inc_field: 'productId' });




module.exports = mongoose.model("Product", productSchema);
  