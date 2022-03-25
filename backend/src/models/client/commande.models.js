const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema({
    quantite: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    produit: {type:mongoose.Schema.ObjectId, ref: 'produits'},
    clients: {type:mongoose.Schema.ObjectId, ref: 'clients'}
})

module.exports = mongoose.model('commande', commandeSchema)