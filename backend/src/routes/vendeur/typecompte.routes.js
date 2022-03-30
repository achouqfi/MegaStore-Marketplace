
const typecompte = require("../../controller/vendeur/typecompte.controller")
const express = require("express")
const router = express.Router();

//type compte
router.get('/', typecompte.index);
router.post('/store', typecompte.store);
router.delete('/:id', typecompte.deletetypecompte);
router.put('/:id', typecompte.update);



module.exports = router;