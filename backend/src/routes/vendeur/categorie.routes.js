
const categorie = require("../../controller/vendeur/categorie.controller");
const express = require("express")
const router = express.Router();


//categorie
router.get('/', categorie.index);
router.get('/count', categorie.countcategotie);
router.post('/store', categorie.store);
router.delete('/:_id', categorie.deletecategorie);
router.put('/:_id', categorie.update);



module.exports = router;