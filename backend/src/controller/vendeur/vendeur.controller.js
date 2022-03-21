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
        comparePassword(password, existingvendeur, res) // comporassion password && data => jwt
    } catch (error) {
        res.status(404).json({ message: error.message }) // req error
    }
}

// get all vendeur 
const index = async (req, res) => {
    try {
        const vendeur = await vendeurs.find() 
        res.status(200).json(vendeur)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// create new vendeur
const store = async (req, res) => {
    //get body from http req 
    const { email, firstName, lastName , phone ,doc } = req.body
    //console.log(req.body);
    try {
        if (!email || !firstName || !lastName || !doc )
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        // const existingManager = await vendeurs.findOne({ email }) //verif if email already exist
        // if (existingManager) return res.status(400).json({ message: "vendeur already exists" })  //error message
        let password = Math.random().toString(20).substring(2, 10) //generate password
        const hashedPassword = await bcrypt.hash(password, 10) //hashing password 
        
        //validation email
        let regix = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailvalide=regix.test(email);
        if(emailvalide){
            // add vendeur
            const newVendeur = await vendeurs.create({
                emailvalide,
                firstName,
                lastName,
                password: hashedPassword,
                phone,
                doc,
                typecompte:"Starter",
                limiteproduit:10,
                status:"en cours"
            })
                // console.log(req.body);
                PasswordMail(email , lastName , firstName , password ,typecompte,limiteproduit,doc,status) //send email
                res.status(200).json({ newVendeur })

        }else{
            return res.status(400).json({ message: "email invalide" })
        }
      
    } catch (err) {
        res.status(400).json({ error: err.message }) //req error
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

//Update type compte vendeur
const updatetypecompte = async (req, res) => {
    //get body from http req 
    const {typecompte} = req.body
    //console.log(req.body);
    try {
        if (!typecompte)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        // const existingManager = await vendeurs.findOne({ email }) //verif if email already exist
        // if (existingManager) return res.status(400).json({ message: "vendeur already exists" })  //error message
       
        if(typecompte=="Pro"){
            limiteproduit=50;
        }else{
            limiteproduit=Number.POSITIVE_INFINITY;
        }
        // update  type compte vendeur
        const newVendeur = await vendeurs.put({
            typecompte:"Starter",
            limiteproduit:10
        })
       // console.log(req.body);
        PasswordMail(typecompte,limiteproduit) //send email
        res.status(200).json({ newVendeur })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}

//Update status compte vendeur
const updatestatus = async (req, res) => {
    //get body from http req 
    const {status} = req.body
    //console.log(req.body);
    try {
        if (!status)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        // const existingManager = await vendeurs.findOne({ email }) //verif if email already exist
        // if (existingManager) return res.status(400).json({ message: "vendeur already exists" })  //error message
       
        // update status compte vendeur
        const newVendeur = await vendeurs.put({
            status:status,
          
        })
       // console.log(req.body);
        PasswordMail(status) //send email
        res.status(200).json({ newVendeur })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}

//chiffre d’affaire
const chiffredaffaire = async (req, res) => {
   

    
    try {
        

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}

module.exports = {
    index,
    loginvendeur,
    store,
    deletevendeur,
    updatetypecompte,
    updatestatus,
    chiffredaffaire
};