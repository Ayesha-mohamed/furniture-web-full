const multer = require('multer');


// Set up storage engine

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "prImages")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage
})

module.exports = upload