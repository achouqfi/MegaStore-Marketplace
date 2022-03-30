
const vendeur = require("../../controller/vendeur/vendeur.controller")
const express = require("express")
const {uploadpdf } = require('../../middleware/Upload/index')
const router = express.Router();

//vendeur
router.get('/', vendeur.index);
router.post('/store',uploadpdf,vendeur.store);
router.delete('/:id',vendeur.deletevendeur);
router.put('/updatetypecompte/:id', vendeur.updatetypecompte);
router.put('/updatestatus/:id', vendeur.updatestatus);
router.post('/login', vendeur.loginvendeur);



module.exports = router;