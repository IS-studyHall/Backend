import mongoose from 'mongoose'
import { FirebaseLogin } from '../sdk/types'

const Schema = mongoose.Schema

var organizationSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true
    },
    name: {
      type: String,
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
      checkAndSave(data: FirebaseLogin) {
        const Organization = mongoose.model('Organization')
        Organization.findOne({_id : data.user.uid}, (err: any, user: any) =>{
          if(!err && !user){
            const organization = new Organization({
              _id: data.user.uid,
              email: data.user.email,
              name: data.user.email.substring(0, data.user.email.indexOf('@')),
            })
            organization.save()
          }
        })
      }
    }
  }
)

export default mongoose.model('Organization', organizationSchema)