const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Create User
const createUser = async (req, res) => {
    try {
        const { name, email, phone, address, password } = req.body;

        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.status(400).send({ error: "The email already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            phone,
            address,
            password: hashPassword
        });

        await newUser.save();
        res.send(newUser);

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Read Users
const readUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// User Login
const Userlogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existEmail = await UserModel.findOne({ email });
        if (!existEmail) {
            return res.status(400).json({ error: "Invalid email" });
        }

        const checkPassword = await bcrypt.compare(password, existEmail.password);
        if (!checkPassword) {
            return res.status(400).json({ error: "Invalid password" });
        }

        res.send({
            message: "success login",
            customer: {
                name: existEmail.name,
                phone: existEmail.phone,
                email: existEmail.email
            }
        });

    } catch (error) {
        res.status(400).json({ error: "server error" });
    }
};

module.exports = { createUser, readUser, Userlogin };

