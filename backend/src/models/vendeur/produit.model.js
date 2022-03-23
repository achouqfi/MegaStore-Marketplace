const mongoose = require('mongoose')

const produit = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    prix: {
        type: Number,
        required: true
    },    
    quantite: {
        type: String,
        required: true
    },    
    images:{type:mongoose.Schema.ObjectId, ref: 'image'}
      ,
      marque: {
        type: String,
        required: true
    }, 
   categorie: {type:mongoose.Schema.ObjectId, ref: 'categorie'},
})

module.exports = mongoose.model('produit', produit)