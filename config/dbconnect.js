//connexion a la base de donnes
const mongoose = require('mongoose')

const ConnectDb = async()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('Connexion acces'))
    .catch((error)=>console.log('Connexion refuser',error))
} 

module.exports = ConnectDb;