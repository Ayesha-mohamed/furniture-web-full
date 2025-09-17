const contactController = require("../controller/ContactController")
const express = require("express")


const router = express.Router()


router.post("/create/contact" ,contactController.createContact)
router.get("/read/contact", contactController.readContact)
router.delete("/delete/message", contactController.deleteMessage)

module.exports = router
