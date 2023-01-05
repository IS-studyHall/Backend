import mongoose from 'mongoose'

const Schema = mongoose.Schema

var reservationSchema = new Schema(
  {
    date: {
        type: Date,
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
    created: {
        type: Date,
        default: Date.now
    }
  }
)

export default mongoose.model('Reservation', reservationSchema)