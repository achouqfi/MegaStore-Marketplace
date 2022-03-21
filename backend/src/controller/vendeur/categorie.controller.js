const categories = require("../../models/categorie/categorie.model");


// get all categorie 
const index = async (req, res) => {
    try {
        const categorie = await categories.find() 
        res.status(200).json(categorie)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// create new categorie
const store = async (req, res) => {
    //get body from http req 
    const { Name} = req.body
    //console.log(req.body);
    try {
        if (!Name )
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        
       
            // add categorie
            const newcategorie = await categories.create({
                Name,
            })
              
        } catch (err) {
            res.status(400).json({ error: err.message }) //req error
        }
}

//delete categorie
const deletecategorie = async (req, res) => {
    const { id } = req.params
    try {
        await categories.findByIdAndDelete(id) //delete categorie by id
        res.status(200).json({ message: "categorie deleted successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Update  categorie
const update = async (req, res) => {
    //get body from http req 
    const {Name} = req.body
    //console.log(req.body);
    try {
        if (!Name)
            return res.status(400).json({ message: "Please fill all the fields" }) // input validation
      
        const newcategorie = await categories.put({
            Name:Name,
        })
     
        res.status(200).json({ newcategorie })

    } catch (err) {
        res.status(400).json({ error: err.message }) // req error
    }
}


module.exports = {
    index,
    store,
    deletecategorie,
    update
};