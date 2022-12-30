import mongoose from 'mongoose'
import { Esse3login, FirebaseLogin } from '../sdk/types'

const Schema = mongoose.Schema

var userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    supervisor: {
      type: Boolean,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  {
    statics: {
      checkAndSaveOrganization(data: FirebaseLogin) {
        const Organization = mongoose.model('User')
        const username = data.email.substring(0, data.email.indexOf('@'))
        Organization.findOne({username : username, supervisor: true, email: data.email}, (err: any, user: any) =>{
          if(!err && !user){
            const organization = new Organization({
              email: data.email,
              username: data.email.substring(0, data.email.indexOf('@')),
              supervisor: true,
            })
            organization.save()
          }
        })
      },
      checkAndSaveStudent(data: Esse3login) {
        const Student = mongoose.model('User')
        Student.findOne({username : data.username, supervisor: false}, (err: any, user: any) =>{
          if(!err && !user){
            const student = new Student({
              username: data.username,
              supervisor: false,
            })
            student.save()
          }
        })
      }
    },
  },
)

export default mongoose.model('User', userSchema)