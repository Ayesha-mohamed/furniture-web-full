// const ContactModel = require("../models/ContactModel")

// // add contact
// const createContact = async (req,res) =>{
//     try{
//         const {name,email,message} = req.body;
//         const newContact = ContactModel({
//             name:name,
//             email:email,
//             message:message
//         })
//         await newContact.save()
//         res.send(newContact)

//     } catch (error){
//         res.status(500).json({message: message.error})
//     }
// }
// // read
// const readSingleContact = async (req,res)=>{
//     try{
//         const readSingleContact = await ContactSchema.find()
//         if(readSingleContact){
//             res.send(readSingleContact)
//         }
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// }
// module.exports = {createContact,readSingleContact}



const ContactModel = require("../models/ContactModel")

// add contact
const createContact = async (req,res) =>{
    try{
        const {name,email,message} = req.body;
        const newContact = ContactModel({
            name:name,
            email:email,
            message:message
        })
        await newContact.save()
        res.send(newContact)

    } catch (error){
        res.status(500).json({message: message.error})
    }
}

//read
const readContact = async (req, res) =>{
    const readData = await ContactModel.find()
    if(readData){
        res.send(readData)
    }
}

//delete
const deleteMessage = async (req, res) =>{
    try {
        const deleted = await ContactModel.deleteOne({_id: req.params.id})
        if(deleted){
            res.send(deleted)
        }
    } catch (error) {
        res.status(400).json({message: message.error})
    }
}


module.exports = {createContact,readContact, deleteMessage}