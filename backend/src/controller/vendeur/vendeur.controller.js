const vendeurs = require("../../models/vendeur/vendeur.model");
const bcrypt = require('bcryptjs');
const { comparePassword } = require('../../helpers/JwtValidation');
const { PasswordMail } = require('../../utils/vendeur/mail');
const ventes =require("../../controller/vendeur/vente.controller");
const typecomptes =require("../../controller/vendeur/typecompte.controller");
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
        const vendeur = await vendeurs.find().populate("typecompte")
        res.status(200).json(vendeur)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// create new vendeur
const store = async (req, res) => {
    //get body from http req 
    const { email, firstName, lastName , phone ,doc ,typecompte} = req.body
    //console.log(req.body);
    try {
        if (!email || !firstName || !lastName || !doc || !phone || !typecompte )
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        let password = Math.random().toString(20).substring(2, 10) //generate password
        const hashedPassword = await bcrypt.hash(password, 10) //hashing password 
        const status="en cours"
        //validation email
        let regix = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailvalide=regix.test(email);
        if(emailvalide){
            // add vendeur
            const newVendeur = await vendeurs.create({
                email,
                firstName,
                lastName,
                password: hashedPassword,
                phone,
                doc,
                typecompte:typecompte,
                status:status
            })
                // console.log(req.body);
                PasswordMail(email , lastName , firstName , hashedPassword ,typecompte,doc,status) //send email
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
    const { id } = req.body
    try {
        await vendeurs.findByIdAndDelete(id) //delete vendeur by id
        res.status(200).json({ message: "vendeur deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Update type compte vendeur par (chiffre d’affaire)
const updatetypecompte = async (req, res) => {
    //get body from http req 
    // const {id} = req.body
    // const record = { _id: id };
    
    try {
        // let vente=ventes.index();
        //let chiffredeffaire=0;
        // vente.forEach(element => {
        //     if(id==element.vendeur.id){
        //         chiffredeffaire+=element.produit.prix;
        //     }
        // });
        
        // if(chiffredeffaire > 5000){
            // typecomptes.forEach(element => {
            //     if(element.Name=="Pro"){
               // update  type compte vendeur
            //    const updatevendeur = await vendeurs.updateOne(record, {
            //     $set: {
            //             typecompte:element.id
            //       }
            //   })
            //   res.status(200).json({ updatevendeur })

                // }
            // });

        // }else if(chiffredeffaire > 20000){
        //     typecomptes.forEach(element => {
        //     if(element.Name=="Expert"){
        //     // update  type compte vendeur
        //     const updatevendeur = await vendeurs.updateOne(record, {
        //         $set: {
        //                 typecompte:element.id
        //           }
        //       })
        //       res.status(200).json({ updatevendeur })
        //     }
        
        //  });
        // }
      //  update  type compte vendeur
        // const newVendeur =  vendeurs.update({
        //     typecompte:id
        // })
     

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}

//Update status compte vendeur
const updatestatus = async (req, res) => {
    //get body from http req 
    const {status} = req.body
 
    try {
        if (!status)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        // update status compte vendeur
        const newVendeur = await vendeurs.put({
            status:status,
          
        })
    
        PasswordMail(status) //send email
        res.status(200).json({ newVendeur })

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
    
};