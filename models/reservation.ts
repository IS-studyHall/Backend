import mongoose from 'mongoose'

const Schema = mongoose.Schema

var reservationSchema = new Schema(
  {
    date: {
        type: String,
    },
    start: {
      type: String,
    },
    end: {
      type: String
    },
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
reservationSchema.index({ user: 1, date: 1, start: 1, end: 1, studyroom: 1, },{unique: true}); // schema level
export default mongoose.model('Reservation', reservationSchema)