const mongoose = require('mongoose')
const superAdminSchema = new mongoose.Schema({
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },    
    email: {
        type: String,
        required: true
    },    
    password: {
        type: String,
        required: true
    },  
     
})

module.exports = mongoose.model('superAdmin', superAdminSchema)