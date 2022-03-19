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

app.use('/api/clients', clientRoutes)

const superAdminRoutes = require('./routes/superAdmin/superAdmin.routes')
app.use('/api/superAdmin', superAdminRoutes)



app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})