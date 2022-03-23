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
<<<<<<< HEAD
   
=======
    images:{type:mongoose.Schema.ObjectId, ref: 'image'}
      ,
>>>>>>> 9847339b785b1cf6830eef0f6badadaab31a3daa
      marque: {
        type: String,
        required: true
    }, 
    categorie: {type:mongoose.Schema.ObjectId, ref:'categorie'},
})

module.exports = mongoose.model('produit', produit)