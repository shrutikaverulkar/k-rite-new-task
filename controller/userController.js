const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../modal/User")

exports.getAllUser = async (req, res) => {
    try {
        const result = await User.find()
        res.status(200).json({ message: "User Fetch Success", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "Something Went Wrong" })
    }
}
exports.register = async (req, res) => {
    try {

        const { password } = req.body
        const hashpass = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hashpass })
        res.status(201).json({ message: "User Regiser Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Something Went Wrong" })
    }
}
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body

        //email valid
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(401).json({ message: "Invalid Email" })
        }

        //verify password
        const verify = await bcrypt.compare(password, result.password)
        if (!verify) {
            return res.status(401).json({ message: "Invalid Password" })
        }

     

        res.status(200).json({
            message: "User login Success",
            result: {
                name: result.name,
                _id: result._id
            }
        })
    } catch (error) {
        res.status(500).json({ message: error.message || "Something Went Wrong" })
    }
}
exports.destroy = async (req, res) => {
    try {
        await User.deleteMany()
        res.status(200).json({ message: "User Destroy Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Something Went Wrong" })
    }
}
exports.logout = async (req, res) => {
    try {
         res.clearCookie("auth")
            res.status(201).json({ message: "User logout Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "Something Went Wrong" })
    }
}