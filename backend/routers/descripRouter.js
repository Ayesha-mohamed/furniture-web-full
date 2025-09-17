const express = require("express")
const router = express.Router()
const descController = require("../controller/descController")


router.post("/create/description", adminController.createAdmin)
router.get("/read/desc", adminController.adminlogin)



module.exports = router