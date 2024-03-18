const express = require('express')
const routerTadySera = express.Router()
const HitadySeraController = require('../controllers/HitadySeraController') 
const multer = require('multer')

const upload = multer()

routerTadySera.post('/hitadySera' , upload.single('image') , HitadySeraController.HitadySera)
routerTadySera.get('/' , HitadySeraController.getAllSeraTadiavina)


module.exports = routerTadySera;