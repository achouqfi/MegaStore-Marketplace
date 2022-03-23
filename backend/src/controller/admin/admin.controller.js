const admin = require('../../models/admin/admin.model');
const bcrypt = require('bcryptjs');
const { comparePassword } = require('../../helpers/JwtValidation');
const { PasswordMail } = require('../../utils/admin/mail');

// login
const login = async(req,res) =>{

    const {email,password} = req.body;
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" }) // input validation
        const existingAdmin = await admin.findOne({email});
        if(!existingAdmin) return res.status(404).json({ message: "Admin not found"}) // error message
        const role = 'admin';
        comparePassword(password, existingAdmin, role, res)
      

    } catch (error) {
        res.status(404).json({ message: error.message }) // req error
    }
}

// create admin
const create = async(req,res) =>{

    const { email, lastName, firstName} = req.body;

    if(!email || !firstName || !lastName)
        return res.status(400).json({ message: "Please fill all the fields" }) // input validation

    let password = Math.random().toString(20).substring(2, 10) //generate password
    const hashedPassword = await bcrypt.hash(password, 10) //hashing password 

    try{

        const adminFound = await admin.findOne({email})

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

// get all admins
const fetch = (req,res) =>{
    try {

        admin.find()
        .then( data => res.status(200).json(data) )

    } catch (error) {

        res.status(404).json({ message: error.message })
        
    }
}

// delete admin
const deleteAdmin = (req,res) =>{
    const id = req.params._id;

    admin.findByIdAndDelete(id)
    .then( data => {
        if(!data) {
            res.status(404).send({
                message: `Admin not found!`
            });
        }else{
            res.status(200).send({
                message: "Admin deleted successfully!"
            })
        }
    })

}

// update password
const updatePassword = async (req,res) =>{
    const id = req.params._id;

    try {

        const result = await  admin.findByIdAndUpdate(id , req.body , {new: true})
        res.status(200).json({ message: "Admin updated successfully" })    

    } catch (error) {
        res.status(400).json({ error: err.message }) // req error

    }
    
}
module.exports = {
    create,
    fetch,
    deleteAdmin,
    login,
    updatePassword
};