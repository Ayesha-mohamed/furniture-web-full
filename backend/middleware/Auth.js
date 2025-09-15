const jwt = require("jsonwebtoken")
require(dotenv).config()


const verifyToken = (req, res, next) =>{
    const token = req.headers["authorization"]
    if(!token){
        return res.status(401).json({message: "no token provided"})
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.jwt_secret)
        req.user = decoded
        next()
        
    } catch (error) {
        res.status(401).json({message:  "invalid token"})
        
    }
}

//qaybta adminka
const isAdmin = (req, res, next) =>{
    if(req.user.role !== "admin" ){
        res.status(403).json({message: "Only admin"})
    }
    next()
}

module.exports = {verifyToken, isAdmin}