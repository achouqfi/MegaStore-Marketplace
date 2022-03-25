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
   
      marque: {
        type: String,
        required: true
    }, 
     images :[{
        type: String,
        required: true
     }],
    categorie: {type:mongoose.Schema.ObjectId, ref:'categorie'},
    vendeur:{type:mongoose.Schema.ObjectId, ref:'vendeur'}
})

module.exports = mongoose.model('produits', produit)