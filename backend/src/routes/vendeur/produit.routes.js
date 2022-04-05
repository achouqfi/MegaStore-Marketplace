const produit = require("../../controller/vendeur/produits.controller")
const express = require("express")
const {uploadimage } = require('../../middleware/Upload/index')
const router = express.Router();


//produit
router.get('/', produit.index);
router.get('/count/:id', produit.countproduit);
router.post('/store',uploadimage, produit.store);
router.delete('/:id', produit.deleteproduit);
router.put('/:id', produit.update);



module.exports = router;