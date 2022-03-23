const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    index,
    store
} = require('../../controller/client/commande.contoller')

router.get('/', index) 
router.post('/store', store)
// router.delete('/:id', deleteClient)

module.exports = router;