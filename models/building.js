const mongoose = require('mongoose')
Schema = mongoose.Schema

const buildingSchema = new Schema({
    id: {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true
    },
    address: {
        type:String,//1 to 4
        required:true
    },
    latitude: {
        type: String,
        required:true
    },
    longitude: {
        type: String,
        required:true
    }
})

module.exports =  mongoose.model('Building', buildingSchema)