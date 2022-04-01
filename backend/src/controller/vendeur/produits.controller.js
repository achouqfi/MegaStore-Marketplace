const produits = require("../../models/vendeur/produit.model");
// const categorie = require("../../models/vendeur/.model");

// get all produit 
const index = async (req, res) => {
    try {
        const produit = await produits.find().populate("categorie").populate("vendeur") 
        res.status(200).json(produit)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//create new produit
const store = async (req, res) => {
    //get body from http req 
    const { Name, prix, quantite, marque, categorie,vendeur} = req.body
    const images=req.file.path

   // console.log(images);
    try {
        if (!Name || !prix || !quantite  || !marque ||!categorie || !vendeur)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

            // add produit
            const newproduit = await produits.create({
                Name,
                prix,
                quantite,
                marque,
                categorie,
                vendeur,
                images:images
            })
              
            res.status(200).json({newproduit})
        //res.status(200).json({images})
        } catch (err) {
            res.status(400).json({ error: err.message }) //req error
        }
}

//delete produit
const deleteproduit = async (req, res) => {
    const { id } = req.params
    try {
        await produits.findByIdAndDelete(id) //delete produit by id
        res.status(200).json({ message: "produit deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Update  produit
const update = async (req, res) => {
    //get body from http req 
    const {Name,prix,quantite,marque,categorie,vendeur} = req.body
    const id=req.params
    const record = { _id: id };
    //console.log(req.body);
    try {
        if (!Name || !prix || !quantite  || !categorie || !vendeur)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
        const updateproduit = await produits.updateOne(record, {
            $set: {
            Name:Name,
            prix:prix,
            quantite:quantite,
            marque:marque,
            categorie:categorie,
            vendeur:vendeur
        },

    });
        res.status(200).json({ updateproduit })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}


module.exports = {
    index,
    store,
    deleteproduit,
    update  
};