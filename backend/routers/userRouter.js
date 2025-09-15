const UserController = require("../controller/userController")
const express = require ("express")
const router = express.Router();

router.post("/create/user", UserController.createUser)
router.get("/read/user", UserController.readUser )
router.post("/create/userlogin", UserController.Userlogin )
router.get("/total/customer", UserController.totalAllCustomers)



module.exports = router;