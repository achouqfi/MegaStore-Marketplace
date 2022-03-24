const commande = require("../../models/client/commande.models");
// const { PasswordMail } = require('../../utils/client/mail')
const produits = require('../../models/vendeur/produit.model')

// get all commandes 
const index = async (req, res) => {
    try {
        const commandes = await commande.find()
        res.status(200).json(commandes)
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


module.exports = {
    index,
    store
};