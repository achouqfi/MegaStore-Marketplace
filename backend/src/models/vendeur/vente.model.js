const mongoose = require('mongoose')

const vente = new mongoose.Schema({
    produit: {type:mongoose.Schema.ObjectId, ref: 'produit'},
    vendeur: {type:mongoose.Schema.ObjectId, ref: 'vendeur'}
})

module.exports = mongoose.model('vente', vente)