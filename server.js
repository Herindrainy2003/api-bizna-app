const express = require('express')
const app = new express()
const ConnectDb = require('./config/dbconnect')
const SeraRoute = require('./Routes/SeraRoute')
const routerTadySera = require('./Routes/SeraTadiavinaRoutes')
const dotenv = require('dotenv')
const cors = require('cors');
const delPro = require('./config/deleteProduit');
dotenv.config()
ConnectDb()

 // Activer CORS avec les options spécifiées
app.use(cors());
  

app.use('/api/sera/' ,SeraRoute)
app.use('/api/hitadySera/' , routerTadySera)


const PORT = process.env.PORT ||1000
app.listen(PORT ,()=>console.log(`Rendez-vous sur localhost:${PORT}`))