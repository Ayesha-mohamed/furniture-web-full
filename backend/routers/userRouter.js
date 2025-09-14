const UserController = require("../controller/userController")
const express = require ("express")
const router = express.Router();

router.post("/cteate/user", UserController.createUser)
router.get("/read/user", UserController.readUser )
router.post("/create/userlogin", UserController.Userlogin )



module.exports = router;