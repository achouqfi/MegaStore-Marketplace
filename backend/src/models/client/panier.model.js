const mongoose = require('mongoose')

const panierSchema = new mongoose.Schema({
    productId: {},
    clientId: {},   
})

module.exports = mongoose.model('panier', panierSchema)