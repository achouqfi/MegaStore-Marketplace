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
    // doc: {
    //     type: String,
    //     required: true
    // },
    status: {
        type: String,
        required: true
    },
   typecompte: {type:mongoose.Schema.ObjectId, ref: 'typecompte'},
})

module.exports = mongoose.model('vendeur', vendeur)