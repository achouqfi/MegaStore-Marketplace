const mongoose = require('mongoose')

const categorie = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('categorie', categorie)