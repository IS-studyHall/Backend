import mongoose from 'mongoose'

const Schema = mongoose.Schema

var buildingSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  coords: {
    type: JSON,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Building', buildingSchema)