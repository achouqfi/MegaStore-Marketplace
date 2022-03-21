const express = require('express');
const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')

//router vendeur
const {
    store,
    loginvendeur,
    index,
    deletevendeur,
} = require('../../controller/vendeur/vendeur.controller')

router.get('/vendeur', index) 
router.post('/vendeur/store', store)
router.delete('/vendeur:id', deletevendeur)
router.post('/vendeur/login',loginvendeur)


//retour produit
// const {
//     store,
//     index,
//     deleteproduit,
//     update
// } = require('../../controller/vendeur/produits.controller')

// router.get('/produit', index) 
// router.post('/produit/store', store)
// router.delete('/produit:id', deleteproduit)
// router.post('/produit/update',update)




module.exports = router;