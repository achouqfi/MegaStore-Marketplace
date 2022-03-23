const mongoose = require('mongoose')

const typecompte = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    limiteproduit: {
        type: String,
        required: true
    },
    chiffredaffaire: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('typecompte', typecompte)