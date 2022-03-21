const mongoose = require('mongoose')

const vendeur = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },    
    email: {
        type: String,
        required: true
    },    
    password: {
        type: String,
        required: true
    },  
    phone: {
        type: String,
        required: true
    }, 
    doc: {
        type: String,
        required: true
    },
    typecompte: {
        type: String,
        required: true
    },
    limiteproduit: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('vendeur', vendeur)