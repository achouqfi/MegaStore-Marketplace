const vendeurs = require("../../models/vendeur/vendeur.model");
const bcrypt = require('bcryptjs');
const { comparePassword } = require('../../helpers/JwtValidation');
const { PasswordMail } = require('../../utils/vendeur/mail');
const commande =require("../../models/client/commande.models");
const produits =require("../../models/vendeur/produit.model");
const typecomptes =require("../../controller/vendeur/typecompte.controller");

//login vendeur
const loginvendeur = async (req, res) => {
    //get body from http req 
    const { email, password } = req.body
    // console.log(req.body);
    try {
        if (!email || !password) return res.status(404).json({ message: "Please fill all the fields" }) // input validation
        const existingVendeur = await vendeurs.findOne({ email }) // find user data with email
        if (!existingVendeur) return res.status(404).json({ message: "vendeur not found"}) // error message
            // console.log(existingClient);
        const role = 'vendeur';
        comparePassword(password, existingVendeur, role, res) // comporassion password && data => jwt
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
    const { email, firstName, lastName ,password, phone ,typecompte} = req.body
    //  const doc=req.file.path
   
     //console.log(req.body);
    
    try {
        if (!email || !firstName || !lastName  || !password || !phone || !typecompte  )
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

     
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
                // doc,
                typecompte:typecompte,
                status:status
            })
             // console.log(req.body);
               // PasswordMail(email , lastName , firstName ,typecompte,doc,status) //send email
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
    // const { id } = req.body
    const id=req.params
    try {
        await vendeurs.findByIdAndDelete(id) //delete vendeur by id
        res
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Update type compte vendeur par (chiffre d’affaire)
const updatetypecompte = async (req, res) => {
    //get body from http req 
    // const {id} = req.body
    const id=req.params
    const record = { _id: id };
    const Commande = await commande.find()
    const Produit = await produits.find()
    const vendeur = await vendeurs.find().populate("typecompte")

     try {
        // let typecompte=typecomptes.index();
        let chiffredeffaire=0;
        let idproduit;
        let idvendeur;
        Commande.forEach(element => {
           idproduit=JSON.stringify(element.produit).replace(/["]+/g, '')
           
           //console.log(idproduit)
            if(element.status!="en cours"){
                Produit.forEach(Element => {
                    //console.log(id)
                 if(Element.id==idproduit){
                    idvendeur=JSON.stringify(Element.vendeur).replace(/["]+/g, '')
                    if(id==idvendeur){
                             chiffredeffaire+=Element.prix;
                    
                       if(chiffredeffaire>5000){
                        // vendeur.forEach(element => {
                            
                                if(chiffredeffaire>5000){
                                    typecomptes.forEach(element => {
                                             if(element.Name=="Pro"){
                                              // update  type compte vendeur
                                               const updatevendeur = vendeurs.updateOne(record, {
                                                $set: {
                                                        typecompte:element.id
                                                  }
                                              })
                                              res.status(200).json({ updatevendeur })
                                
                                            }else if(chiffredeffaire > 20000){
                                                      typecomptes.forEach(element => {
                                                        if(element.Name=="Expert"){
                                                        // update  type compte vendeur
                                                        const updatevendeur =  vendeurs.updateOne(record, {
                                                            $set: {
                                                                    typecompte:element.id
                                                              }
                                                          })
                                                          res.status(200).json({ updatevendeur })
                                                        }
                                                    
                                                     });
                                                    } 

                                            });
                            }
                        }
                    
                    }
                       
                       

                   }
                });

             }
          
        });

  } catch (err) {
       res.status(400).json({ error: err.message }) // req error
    }
 }

//Update status compte vendeur
const updatestatus = async (req, res) => {
    //get body from http req 
    const {status} = req.body
    const id=req.params
    const record = { _id: id };
    try {
        if (!status)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        // update status compte vendeur
        const updatestatusvendeur = await vendeurs.updateOne(record, {
            $set: {
            status:status,
            }
        })
        res.status(200).json({ updatestatusvendeur })

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
    updatestatus
};