const commande = require("../../models/client/commande.models");
// const { PasswordMail } = require('../../utils/client/mail')
const produits = require('../../models/vendeur/produit.model')

// get all commandes 
const index = async (req, res) => {
    try {
        const commandes = await commande.find().populate('produit').populate('clients')
        res.status(200).json(commandes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// count all commande 
const countcommande = async (req, res) => {
    id=req.params
    const idvendeur1=JSON.stringify(id.id).replace(/["]+/g, '')
    // console.log("2",idvendeur1);
    try {
        let count=0;
        const commandes = await commande.find().populate("produit")

        commandes.forEach(element => {
            const idvendeur=JSON.stringify(element.produit.vendeur._id).replace(/["]+/g, '')
          
            // console.log("1",idvendeur);
            
            if(idvendeur == idvendeur1){
                count++;
            }
        });
        res.status(200).json(count)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// count all vendeur 
const commandevendeur = async (req, res) => {
    id=req.params
    const idvendeur1=JSON.stringify(id.id).replace(/["]+/g, '')
    
    try {
         data=[]
        const commandes = await commande.find().populate("produit").populate('clients')

        commandes.forEach(element => {
            const idvendeur=JSON.stringify(element.produit.vendeur._id).replace(/["]+/g, '')
          
            if(idvendeur == idvendeur1){
                data.push(element)
            }
        });
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}



// add new commande
const store = async (req, res) => {
    //get body from http req 
    const { produit, clients, quantite} = req.body
    try {
        if (!produit || !clients || !quantite)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        const existingQuantity = await produits.findOne({ produit }) // find user data with product id
        const date = new Date();        
        if (existingQuantity.quantite < quantite ) return res.status(400).json({ message: "quantity insufficient" })  //error message
        // add cmd
        const newCommande = await commande.create({
            produit,
            clients,
            quantite,
            date: date,
            status:'en cours'
        })
        // PasswordMail(email , lastName , firstName , password) //send email
        res.status(200).json({ newCommande })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}

//update commande status
const updateStatus  = async (req, res) => {
    try {
        const updateStatus = await commande.updateOne(
            {_id:req.params.id},
            {$set: { status:req.body.status }}
        )
        res.status(200).json(updateStatus)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {
    index,
    store,
    updateStatus,
    countcommande,
    commandevendeur
};