const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')
const {
    store,
    loginvendeur,
    index,
    deletevendeur,
} = require('../../controller/vendeur/vendeur.controller')

router.get('/', index) 
router.post('/store', store)
router.delete('/:id', deletevendeur)
router.post('/login',loginvendeur)

module.exports = router;