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
      async checkAndSaveStudent(data: Esse3login) {
        const User = mongoose.model('User')
        try {
        const user = await User.find({username : data.username, supervisor: false})
          if(user.length === 0){
            const user = new User({
              username: data.username,
              supervisor: false,
            })
            user.save()
            const Student = mongoose.model('Student')
            const student = new Student({
              firstname: data.firstName,
              lastName: data.lastName,
              numberid: data.matricola,
              user: user
            })
            student.save()
          }
      } catch(e){
        console.log(e)
      }
      }
    },
  },
)

export default mongoose.model('User', userSchema)