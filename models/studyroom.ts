import mongoose from 'mongoose'

const Schema = mongoose.Schema

var studyroomSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    seats: {
      type: Number,
      required: true
    },
    floor: {
        type: Number,
        required: true
    },
    isactive: {
        type: Boolean,
        default: true
    },
    building: {
        type: Schema.Types.ObjectId,
        ref: "Building"
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Organization"
    },
    created: {
      type: Date,
      default: Date.now
    }
  }
)
studyroomSchema.index({ owner: 1, building: 1 },{unique: true});
export default mongoose.model('Studyroom', studyroomSchema)