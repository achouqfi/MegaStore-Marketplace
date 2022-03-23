const ventes = require("../../models/vendeur/vente.model");


// get all vente 
const index = async (req, res) => {
    try {
        const vente = await ventes.find().populate("produit").populate("vendeur")
        res.status(200).json(vente)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// // create new vente
const store = async (req, res) => {
    //get body from http req 
    const { Name,limiteproduit,chiffredaffaire} = req.body
    //console.log(req.body);
    try {
        if (!Name || !limiteproduit || !chiffredaffaire)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        
       
            // add vente
            const newvente = await ventes.create({
                Name,
                limiteproduit,
                chiffredaffaire
            })
              
        } catch (err) {
            res.status(400).json({ error: err.message }) //req error
        }
}

//delete vente
const deletevente = async (req, res) => {
    const { id } = req.params
    try {
        await ventes.findByIdAndDelete(id) //delete vente by id
        res.status(200).json({ message: "vente deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Update  vente
const update = async (req, res) => {
    //get body from http req 
    const {Name,limiteproduit,chiffredaffaire} = req.body
    //console.log(req.body);
    try {
        if (!Name || !limiteproduit || !chiffredaffaire)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
      
        const newvente = await ventes.update({
            Name:Name,
            limiteproduit:limiteproduit,
            chiffredaffaire:chiffredaffaire
        })
     
        res.status(200).json({ newvente })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}


module.exports = {
    index,
    store,
    deletevente,
    update
};