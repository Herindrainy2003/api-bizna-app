const express = require('express')
const app = new express()
const ConnectDb = require('./config/dbconnect')
const SeraRoute = require('./Routes/SeraRoute')
const routerTadySera = require('./Routes/SeraTadiavinaRoutes')
const dotenv = require('dotenv')


dotenv.config()
ConnectDb()
 
app.use('/api/sera/' ,SeraRoute)
app.use('/api/hitadySera/' , routerTadySera)

const PORT = process.env.PORT
app.listen(PORT ,()=>console.log(`Rendez-vous sur localhost:${PORT}`))