const mongoose = require('mongoose')

const image = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    produit:{type:mongoose.Schema.ObjectId, ref:'produit'}
    
})

module.exports = mongoose.model('image', image)