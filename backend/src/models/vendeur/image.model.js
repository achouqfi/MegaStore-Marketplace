const mongoose = require('mongoose')

const image = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('image', image)