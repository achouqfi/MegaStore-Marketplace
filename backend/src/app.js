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
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true }, () => {
    console.log('Database Connected')
})

const clientRoutes = require('./routes/client/client.routes')

app.use('/api/clients', clientRoutes)


app.listen(process.env.PORT, () => {
    console.log(`up and running at http://localhost:${process.env.PORT}`);
})