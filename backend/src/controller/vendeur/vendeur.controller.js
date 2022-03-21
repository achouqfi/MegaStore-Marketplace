const vendeurs = require("../../models/vendeur/vendeur.model");
const bcrypt = require('bcryptjs')
const { comparePassword } = require('../../helpers/vendeur/JwtValidation')
const { PasswordMail } = require('../../utils/vendeur/mail')

//login vendeur
const loginvendeur = async (req, res) => {
    //get body from http req 
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" }) // input validation
        const existingvendeur = await vendeurs.findOne({ email }) // find user data with email
        if (!existingvendeur) return res.status(404).json({ message: "vendeur not found"}) // error message
        comparePassword(password, existingAdmin, res) // comporassion password && data => jwt
    } catch (error) {
        res.status(404).json({ message: error.message }) // req error
    }
}

// get all vendeur 
const index = async (req, res) => {
    try {
        const vendeur = await vendeurs.find() 
        res.status(200).json(managers)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// create new vendeur
const store = async (req, res) => {
    //get body from http req 
    const { email, firstName, lastName , phone } = req.body
    console.log(req.body);
    try {
        if (!email || !firstName || !lastName)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        // const existingManager = await vendeurs.findOne({ email }) //verif if email already exist
        // if (existingManager) return res.status(400).json({ message: "vendeur already exists" })  //error message
        let password = Math.random().toString(20).substring(2, 10) //generate password
        const hashedPassword = await bcrypt.hash(password, 10) //hashing password 
        // add vendeur
        const newManager = await vendeurs.create({
            email,
            firstName,
            lastName,
            password: hashedPassword,
            phone
        })
        console.log(req.body);
        PasswordMail(email , lastName , firstName , password) //send email
        res.status(200).json({ newManager })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}

//delete vendeur
const deletevendeur = async (req, res) => {
    const { id } = req.params
    try {
        await vendeurs.findByIdAndDelete(id) //delete vendeur by id
        res.status(200).json({ message: "vendeur deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    index,
    loginvendeur,
    store,
    deletevendeur
};