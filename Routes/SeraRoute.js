const express = require('express')
const router = express.Router()
const SeraController = require('../controllers/SeraController') 
const multer = require('multer')



const upload = multer()

router.post('/addsera' , upload.single('image') , SeraController.addSera )
router.get('/' , SeraController.getAllSera)


module.exports = router;