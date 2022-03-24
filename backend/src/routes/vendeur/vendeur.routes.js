// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const morgan = require('morgan')

//router vendeur
// const {
//     store,
//     loginvendeur,
//     index,
//     deletevendeur,
// } = require('../../controller/vendeur/vendeur.controller')

// router.get('/vendeur', index) 
// router.post('/vendeur/store', store)
// router.delete('/vendeur:id', deletevendeur)
// router.post('/vendeur/login',loginvendeur)


// //retour produit
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




// module.exports = router;

const vendeur = require("../../controller/vendeur/vendeur.controller")
const vente = require("../../controller/vendeur/vente.controller")
const image = require("../../controller/vendeur/image.controller")
const categorie = require("../../controller/vendeur/categorie.controller")
const produit = require("../../controller/vendeur/produits.controller")
const typecompte = require("../../controller/vendeur/typecompte.controller")
const express = require("express")
const {uploadpdf,uploadimage } = require('../../middleware/Upload/index')
// const uploadfile=require("../../middleware/Upload/index")
const router = express.Router();

//vendeur
router.get('/vendeur', vendeur.index);
router.post('/vendeur/store',uploadpdf,vendeur.store);
router.delete('/vendeur/delete',vendeur.deletevendeur);
router.put('/vendeur/updatetyprcompte', vendeur.updatetypecompte);
router.put('/vendeur/updatestatus', vendeur.updatestatus);
router.post('/vendeur/loginvendeur', vendeur.loginvendeur);


//vente
router.get('/vente', vente.index);

//image
router.get('/image',  image.index);
router.post('/image/store',uploadimage,image.store);
router.delete('/image/delete', image.deleteimage);
router.put('/image/update', image.update);

//produit
router.get('/produit', produit.index);
router.post('/produit/store', produit.store);
router.delete('/produit/delete', produit.deleteproduit);
router.put('/produit/update', produit.update);

//categorie
router.get('/categorie', categorie.index);
router.post('/categorie/store', categorie.store);
router.delete('/categorie/delete', categorie.deletecategorie);
router.put('/categorie/update', categorie.update);

//type compte
router.get('/typecompte', typecompte.index);
router.post('/typecompte/store', typecompte.store);
router.delete('/typecompte/delete', typecompte.deletetypecompte);
router.put('/typecompte/update', typecompte.update);



module.exports = router;