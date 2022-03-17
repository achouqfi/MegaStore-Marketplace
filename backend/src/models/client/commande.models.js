const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema({
    productId: {},
    clientId: {}, 
    quentite: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
})

module.exports = mongoose.model('commande', commandeSchema)