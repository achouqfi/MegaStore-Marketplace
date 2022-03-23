const commandes = require("../../models/client/commande.models");
// const { PasswordMail } = require('../../utils/client/mail')


// get all commandes 
const index = async (req, res) => {
    try {
        const commandes = await commandes.find() 
        res.status(200).json(commandes)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// add new commande
const store = async (req, res) => {
    //get body from http req 
    const { ProductID, ClientID, quantite} = req.body
    try {
        if (!productID || !ClientID || !quantite)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        const existingQuantity = await commandes.findOne({ ProductID }).populate() // find user data with product id
        if (existingQuantity.quantite < quantite ) return res.status(400).json({ message: "quantity insufficient" })  //error message
        // add cmd
        const newCommande = await commandes.create({
            ProductID,
            ClientID,
            quantite
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