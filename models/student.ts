import mongoose from 'mongoose'

const Schema = mongoose.Schema

var studentSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      trim: true,
      required: true
    },
    codFis: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('Student', studentSchema)