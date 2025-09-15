const mongoose = require("mongoose")


const userShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"]
    },

    address: {
        type: String,

    },
    phone: {
        type: Number,
    },
   
    totalUser: {
        type: Number,
        required: true
    }
    
    
    
}, {timestamps: true})

module.exports = mongoose.model("user", userShema)