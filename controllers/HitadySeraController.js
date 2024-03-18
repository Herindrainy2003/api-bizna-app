const SeraTadiavina = require('../models/SeraTadiavina')
exports.HitadySera = (req , res)=>{
    if (!req.file) {
        return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }

    SeraTadiavina.create({
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
            res.status(201).json({message : 'SeraTadiavina bien ajouter'})
        })
        .catch((error)=>res.status(500).json({Erreur : error.message}))
}


exports.getAllSeraTadiavina = (req , res) =>{
    SeraTadiavina.find()
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch(e=>{
            res.status(500).json(e.message)
        })

}





