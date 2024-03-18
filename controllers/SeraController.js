const Sera = require('../models/Sera.js')
const path = require('path') 


//le controller pour l'ajout de sera 
exports.addSera = (req , res)=>{
    if (!req.file) {
        return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }

    Sera.create({
        nameSera : req.body.nameSera ,
        price : req.body.price ,
        description :req.body.description ,
        contact : req.body.contact ,
        category : req.body.category,
        nameFacebook : req.body.nameFacebook ,
        image : {
            data : req.file.buffer,
            contentType: req.file.mimetype

        }
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

//delete 
exports.deleteSera = (req,  res)=>{
    let id = req.params.id;
    Sera.deleteOne({_id : id})
        .then(()=> res.status(200).json({message : 'bien supprimmer'}))
        .catch((e) => res.status(500).json({error : e.message}))
}