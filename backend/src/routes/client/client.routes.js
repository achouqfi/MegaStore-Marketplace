const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
    loginClient,
    index,
    deleteClient,
} = require('../../controller/client/client.controller')

router.get('/', index) 
router.post('/store', store)
router.delete('/:id', deleteClient)
router.post('/login',loginClient)

module.exports = router;