const  mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    customer: {
        type:String,
        required: true
    },
    products: [
        {
            productId: {type: mongoose.Schema.Types.ObjectId, ref:"product", required: true},
            quantity: {type: Number} 

        }
    ],
    TotalAmount: {type: Number, required: true}
})

module.exports = mongoose.model("order", orderSchema)