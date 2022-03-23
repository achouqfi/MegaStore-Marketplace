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
    productId: {type:mongoose.Schema.ObjectId, ref: 'produit'},
    clientId: {type:mongoose.Schema.ObjectId, ref: 'client'},
})

module.exports = mongoose.model('commande', commandeSchema)