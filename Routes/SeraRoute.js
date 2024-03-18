const express = require('express')
const router = express.Router()
const SeraController = require('../controllers/SeraController') 
const { diskStorage } = require('multer')
const multer = require('multer')



const upload = multer()

router.post('/addsera' , upload.single('image') , SeraController.addSera )
router.get('/' , SeraController.getAllSera)
router.get('/:id' , SeraController.getSeraByID)
router.delete('/delete/:id' , SeraController.deleteSera)

module.exports = router;