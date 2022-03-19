const superAdmin = require('../../models/superAdmin/superAdmin.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {
    comparePassword,
    generateToken
} = require('../../helpers/client/JwtValidation')
const {
    PasswordMail
} = require('../../utils/client/mail')

// superAdmin login
const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        if (!email || !password) {
            res.status(400).json({
                message: "Please fill all the fields"
            })
        } else {
            const user = await superAdmin.findOne({
                email,
                password
            })
            if(!user){
                res.status(400).json({message:"user not found"})
            }else{
                const role = 'superAdmin'
            console.log(user);

            // Create token
            const token = jwt.sign({
                id: user._id,
                email: user.email,
                role: role
            }, `${process.env.JWT_SECRET_KEY}`, {
                expiresIn: '1h'
            })
            res.status(200).json({
                token,
                email: user.email,
                role: role
            })
            }
            
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }



}
module.exports = {
    login
}