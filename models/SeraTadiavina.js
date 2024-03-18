const mongoose = require('mongoose')
const SeraTadiavina =  mongoose.Schema({
    nameSera : {
        type : String,
        required : true 
    } ,
    price : {
        type : Number ,
        required : true
    },
    description : {
        type : String ,
        required : true
    } ,
    contact :{
        type : String ,
        required : true
    },
    category : {
        type : String ,
        required: true
    } ,
    nameFacebook :{
        type : String ,
        required : true
    } ,
    image : {
        data : Buffer,
        contentType: String
    }
}, { timestamps: true })

module.exports = mongoose.model('SeraTadiavina', SeraTadiavina)