const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
require('dotenv').config();
 


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/src`))


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database Connected')
})
  
const clientRoutes = require('./routes/client/client.routes')
const commandeRoutes = require('./routes/client/commade.routes')
app.use('/api/clients', clientRoutes)
app.use('/api/commandes', commandeRoutes)

const superAdminRoutes = require('./routes/superAdmin/superAdmin.routes')
app.use('/api/superAdmin', superAdminRoutes)

const AdminRoutes = require('./routes/admin/admin.routes')
app.use('/api/admin', AdminRoutes)

const vendeurRoutes = require('./routes/vendeur/vendeur.routes')
app.use('/api/vendeur', vendeurRoutes)

//commande api 
const commandeRoute = require('./routes/client/commade.routes')
app.use('/api/commande', commandeRoute)


app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})