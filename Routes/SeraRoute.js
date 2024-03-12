const express = require('express')
const router = express.Router()
const SeraController = require('../controllers/SeraController') 
const { diskStorage } = require('multer')
const multer = require('multer')

//pour gereer l'image
const storage = multer.diskStorage ({
    destination : (req, file, cb)=>{
        cb(null , 'sera/')
    },
    filename : (req, file, cb)=>{
        cb(null , Date.now() + '-' + file.originalname)
    }
})

const upload = multer({storage})

router.post('/addsera' , upload.single('image') , SeraController.addSera )
router.get('/' , SeraController.getAllSera)
router.get('/:id' , SeraController.getSeraByID)
router.delete('/delete/:id' , SeraController.deleteSera)



module.exports = router