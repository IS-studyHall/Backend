import mongoose from 'mongoose'
import { Esse3login } from '../sdk/types'

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
  },
  {
    statics: {
      checkAndSave(data: Esse3login) {
        const Student = mongoose.model('Student')
        Student.findOne({codFis : data.user.codFis}, (err: any, user: any) =>{
          if(!err && !user){
            const student = new Student({
              _id: data.user.userId,
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              codFis: data.user.codFis
            })
            student.save()
          }
        })
      }
    }
  }
)

export default mongoose.model('Student', studentSchema)