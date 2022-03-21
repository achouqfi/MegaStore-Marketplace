const typecomptes = require("../../models/vendeur/typecompte.model");


// get all typecompte 
const index = async (req, res) => {
    try {
        const typecompte = await typecomptes.find() 
        res.status(200).json(typecompte)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// // create new typecompte
// const store = async (req, res) => {
//     //get body from http req 
//     const { Name,limiteproduit,chiffredaffaire} = req.body
//     //console.log(req.body);
//     try {
//         if (!Name || !limiteproduit || !chiffredaffaire)
//             return res.status(400).json({ message: "Please fill all the fields" }) // input validation

        
       
//             // add typecompte
//             const newtypecompte = await typecomptes.create({
//                 Name,
//                 limiteproduit,
//                 chiffredaffaire
//             })
              
//         } catch (err) {
//             res.status(400).json({ error: err.message }) //req error
//         }
// }

// //delete typecompte
// const deletetypecompte = async (req, res) => {
//     const { id } = req.params
//     try {
//         await typecomptes.findByIdAndDelete(id) //delete typecompte by id
//         res.status(200).json({ message: "typecompte deleted successfully" })
//     } catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

// //Update  typecompte
// const update = async (req, res) => {
//     //get body from http req 
//     const {Name,limiteproduit,chiffredaffaire} = req.body
//     //console.log(req.body);
//     try {
//         if (!Name || !limiteproduit || !chiffredaffaire)
//             return res.status(400).json({ message: "Please fill all the fields" }) // input validation
      
//         const newtypecompte = await typecomptes.put({
//             Name:Name,
//             limiteproduit:limiteproduit,
//             chiffredaffaire:chiffredaffaire
//         })
     
//         res.status(200).json({ newtypecompte })

//     } catch (err) {
//         res.status(400).json({ error: err.message }) // req error
//     }
// }


module.exports = {
    index,
    // store,
    // deletetypecompte,
    // update
};