import mongoose from 'mongoose'

const Schema = mongoose.Schema

var favoriteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    studyroom: {
      type: Schema.Types.ObjectId,
      ref: "Studyroom"
    },
    created: {
      type: Date,
      default: Date.now
    }
  }
)
favoriteSchema.index({ user: 1, studyroom: 1 },{unique: true}); // schema level
export default mongoose.model('Favorite', favoriteSchema)