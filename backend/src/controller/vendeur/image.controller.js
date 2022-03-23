const images = require("../../models/vendeur/image.model");


// get all image 
const index = async (req, res) => {
    try {
        const image = await images.find() 
        res.status(200).json(image)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// create new image
const store = async (req, res) => {
    //get body from http req 
    const { Name,produit} = req.body
    //console.log(req.body);
    try {
        if (!Name || !produit)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
            // add image
            const newimage = await images.create({
                Name,
                produit
            })
        res.status(200).json({ newimage })

        } catch (err) {
            res.status(400).json({ error: err.message }) //req error
        }
}

//delete image
const deleteimage = async (req, res) => {
    const { id } = req.body
    try {
        await images.findByIdAndDelete(id) //delete image by id
        res.status(200).json({ message: "image deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Update  image
const update = async (req, res) => {
    //get body from http req 
    const {Name,produit,id} = req.body
    const record = { _id: id };
    console.log(req.body);
    try {
        if (!Name || !produit)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
      
        const updateimage = await images.updateOne(record, {
                $set: {
            Name:Name,
            produit:produit
                }
        });
     
        res.status(200).json({ updateimage })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}


module.exports = {
    index,
    store,
    deleteimage,
    update
};