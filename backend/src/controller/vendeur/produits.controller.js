const produits = require("../../models/produit/produit.model");

// get all produit 
const index = async (req, res) => {
    try {
        const produit = await produits.find() 
        res.status(200).json(produit)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


//create new produit
const store = async (req, res) => {
    //get body from http req 
    const { Name,prix,quantite,images,categorie} = req.body
    //console.log(req.body);
    try {
        if (!Name || !prix || !quantite || !images || !categorie)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        
       
            // add produit
            const newproduit = await produits.create({
                Name,
                prix,
                quantite,
                images,
                categorie
            })
              
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
    const {Name,prix,quantite,images,categorie} = req.body
    //console.log(req.body);
    try {
        if (!Name || !prix || !quantite || !images || !categorie)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
      
        const newproduit = await produits.put({
            Name:Name,
            prix:prix,
            quantite:quantite,
            images:images,
            categorie:categorie
        })
     
        res.status(200).json({ newproduit })

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