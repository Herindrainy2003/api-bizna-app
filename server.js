const express = require('express')
const app = new express()

const ConnectDb = require('./config/dbconnect')
const SeraRoute = require('./Routes/SeraRoute')
const dotenv = require('dotenv')

dotenv.config()
ConnectDb()




app.use('/api/sera/' ,SeraRoute)

const PORT = process.env.PORT
app.listen(PORT ,()=>console.log(`Rendez-vous sur localhost:${PORT}`))