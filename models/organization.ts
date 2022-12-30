import mongoose from 'mongoose'

const Schema = mongoose.Schema

var organizationSchema = new Schema(
  {
    created: {
      type: Date,
      default: Date.now
    }
  }
)

export default mongoose.model('Organization', organizationSchema)