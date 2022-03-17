const clients = require("../../models/client/client.model");
const bcrypt = require('bcryptjs')
const { comparePassword } = require('../../helpers/client/JwtValidation')
const { PasswordMail } = require('../../utils/client/mail')

//login client
const loginClient = async (req, res) => {
    //get body from http req 
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" }) // input validation
        const existingClient = await clients.findOne({ email }) // find user data with email
        if (!existingClient) return res.status(404).json({ message: "client not found"}) // error message
        comparePassword(password, existingAdmin, res) // comporassion password && data => jwt
    } catch (error) {
        res.status(404).json({ message: error.message }) // req error
    }
}

// get all client 
const index = async (req, res) => {
    try {
        const client = await clients.find() 
        res.status(200).json(managers)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// create new client
const store = async (req, res) => {
    console.log("jjjjjjjjj");
    //get body from http req 
    const { email, firstName, lastName , phone } = req.body
    console.log(req.body);
    try {
        if (!email || !firstName || !lastName)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        // const existingManager = await clients.findOne({ email }) //verif if email already exist
        // if (existingManager) return res.status(400).json({ message: "client already exists" })  //error message
        let password = Math.random().toString(20).substring(2, 10) //generate password
        const hashedPassword = await bcrypt.hash(password, 10) //hashing password 
        // add client
        const newManager = await clients.create({
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

//delete client
const deleteClient = async (req, res) => {
    const { id } = req.params
    try {
        await clients.findByIdAndDelete(id) //delete client by id
        res.status(200).json({ message: "client deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    index,
    loginClient,
    store,
    deleteClient
};