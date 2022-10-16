const mongoose = require('mongoose')
Schema = mongoose.Schema

const classroomSchema = new Schema({
    id: {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true
    },
    places: {
        type:Number,
        required:true
    },
    building: {
        type: Schema.Types.ObjectId,
        ref: "Building"
    },
    association: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
})

module.exports =  mongoose.model('Classroom', classroomSchema)