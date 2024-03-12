const { timeStamp } = require('console');
const Sera = require('../models/Sera.js')
const path = require('path') 

//ajoutez sera
exports.addSera = (req , res)=>{
    const imagePath = path.join(__dirname,'../' , req.file.path);
    Sera.create({
        nameSera : req.body.nameSera ,
        price : req.body.price ,
        description :req.body.description ,
        contact : req.body.contact ,
        category : req.body.category,
        nameFacebook : req.body.nameFacebook ,
        image : imagePath
    })
        .then(()=>{
            res.status(201).json({message : 'Sera bien ajouter'})
        })
        .catch((error)=>res.status(500).json({Erreur : error.message}))
}

//afficher les sera
exports.getAllSera = (req , res) =>{
    Sera.find()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch(e=>{
            res.status(500).json(e.message)
        })

}

//afficher par id
exports.getSeraByID = (req , res)=>{
    let id = req.params.id

    Sera.findById(id)
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch(error=>{
            res.status(500).json(error)
        })
}

//modifier le sera
exports.updateSera = (req , res)=>{
    let id = req.params.id
    const imagePath = path.join(__dirname,'../' , req.file.path)

    Sera.updateOne({_id : id  , image : imagePath})
        .then(() =>{
            res.status(200).json({message : "Mise a jour a 5 sur 5"})
        })
        .catch((error)=>{
            res.status(500).json({erreur : error})
        })
}