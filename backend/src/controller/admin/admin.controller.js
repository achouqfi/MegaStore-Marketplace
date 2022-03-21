const admin = require('../../models/admin/admin.model');
const bcrypt = require('bcryptjs');
const { comparePassword } = require('../../helpers/JwtValidation');
const { PasswordMail } = require('../../utils/admin/mail');

// create admin
const create = async(req,res) =>{

    const { email, lastName, firstName} = req.body;

    if(!email || !firstName || !lastName)
        return res.status(400).json({ message: "Please fill all the fields" }) // input validation

    let password = Math.random().toString(20).substring(2, 10) //generate password
    const hashedPassword = await bcrypt.hash(password, 10) //hashing password 

    try{

        const adminFound = await admin.findOne({email: email})

        if(adminFound) 
            return res.status(400).json({ message: "This mail is already used" }) // check if the email already existed
        
        
        const newAdmin = await admin.create({
            email,
            firstName,
            lastName,
            password: hashedPassword,
        })

        PasswordMail(email , lastName , firstName , password) //send email
        res.status(200).json({ newAdmin })

    }catch{
        res.status(400).json({ error: err.message }) // req error
    }
    
}

module.exports = {
    create
};