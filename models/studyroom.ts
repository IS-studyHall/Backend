import mongoose from 'mongoose'
import { Studyroom } from '../sdk/types';
import User from './user';
import Building from './building';
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
    image: {
      type: String,
      required: true,
    },
    building: {
        type: Schema.Types.ObjectId,
        ref: "Building"
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  {
    statics: {
      async checkAndSave(data: Studyroom) {
        try{
          const Studyroom = mongoose.model('Studyroom')
          const building = await Building.findById(data.building)
          const user = await User.findOne({username: data.owner, supervisor: true})
          const studyroom = new Studyroom({
            name: data.name,
            seats: data.seats,
            floor: data.floor,
            building: building,
            image: data.image,
            owner: user,
          })
          await studyroom.save()
          return 'create';
        }catch(e){
          console.log('error', e)
          return null;
        }
      }
    }
  }
)
studyroomSchema.index({ name: 1 },{unique: true});
export default mongoose.model('Studyroom', studyroomSchema)