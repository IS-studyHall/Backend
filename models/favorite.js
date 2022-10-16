const mongoose = require('mongoose')
Schema = mongoose.Schema

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    classroom: {
        type: Schema.Types.ObjectId,
        ref: "Classroom"
    },
    created: {
        type:Date,
        default: Date.now
    }
})

favoriteSchema.index({ user: 1, classroom: 1 },{unique: true}) // schema level

module.exports =  mongoose.model('Favorite', favoriteSchema)