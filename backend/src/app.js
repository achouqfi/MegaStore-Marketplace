const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
require('dotenv').config();
const morgane = require('morgan');
const fs = require('fs');
const morgan = require('morgan');
const req = require('express/lib/request');


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/src`));

// Loges
morgane.token('body', (req) => JSON.stringify(req.body));
app.use(morgane(':status :method :url :body :response-time ms',{stream: fs.createWriteStream('./Logger.log', {flags: 'a'})}))


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Database Connected')
})
  
// Client api
const clientRoutes = require('./routes/client/client.routes')
app.use('/api/clients', clientRoutes)

// SuperAdmin api
const superAdminRoutes = require('./routes/superAdmin/superAdmin.routes')
app.use('/api/superAdmin', superAdminRoutes)

// Admin api
const AdminRoutes = require('./routes/admin/admin.routes')
app.use('/api/admin', AdminRoutes)


// Vendeur api
const vendeurRoutes = require('./routes/vendeur/vendeur.routes')
app.use('/api/vendeur', vendeurRoutes)

//commande api 
const commandeRoute = require('./routes/client/commade.routes')
app.use('/api/commande', commandeRoute)


app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})