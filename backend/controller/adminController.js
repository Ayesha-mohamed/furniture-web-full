// const AdminModel = require ("../models/adminModel")
// const bcyrpt = require ("bcryptjs")
// const jwt = require ("jsonwebtoken")
// const adminModel = require("../models/adminModel")


// const createAdmin = async (req, res) => {
//     try{
//         {name, email, password} = req.body
//         const exsistemail = await adminModel.findOne({email})
//         if(exsistemail){
//             return req.status(400).send({error: "the email is already exsist"})

//         }
//         const hashpassword = await bcyrpt.hash(password, 10)
//         const newData = new adminModel({
//             name,
//             email,
//             password: "hashpassword"
//         })
//         await newData.save()
//         res.send(newData)
//     } catch(error){
//          return res.status(500).json({ message: "server error", error: error.message })

//     }

// }

// // 


// module.exports = {createAdmin, adminlogin}


const AdminModel = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existEmail = await AdminModel.findOne({ email });
    if (existEmail) {
      return res.status(400).send({ error: "The email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newData = new AdminModel({
      name,
      email,
      password: hashPassword,
    });

    await newData.save();
    res.send(newData);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "server error", error: error.message });
  }
};




//
const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existEmail = await AdminModel.findOne({ email });
    if (!existEmail) {
      return res.status(400).json({ error: "Invalid email" });
    }

    const checkPassword = await bcrypt.compare(password, existEmail.password);
    if (!checkPassword) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      {
        id: existEmail._id,
        name: existEmail.name,
        email: existEmail.email,
        role: existEmail.role,
      },
      process.env.JWT_SECRET, 
      { expiresIn: "1h" }
    );

    res.send({
      message: "success login",
      admin: {
        name: existEmail.name,
        email: existEmail.email,
        role: existEmail.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ error: "server error", details: error.message });
  }
};

module.exports = { createAdmin, adminlogin };

