import Esse3 from '../sdk/Esse3'
import Firebase from '../sdk/Firebase'
import { Request, Response} from 'express'
/*
description: middleware module provide to check access token
*/
class Auth {
  static async student(req: Request, res: Response, next: any) {
    const token = req.headers["authorization"]
    if (!token) return res.status(403).send("A token is required for authentication")
    try {
      const resp = await Esse3.checkLogon(token)
      return (resp.data.ok ===true) ?  next() : res.status(401).send("invalid token")
    }catch(error) {
      return res.status(401).send("invalid token")
    }
  }

  static async organization(req: Request, res: Response, next: any) {
    const token = req.headers["authorization"]
    if (!token) return res.status(403).send("A token is required for authentication")
    try {
      const resp = await Firebase.verifyToken(token)
      req.body.username = resp.data.email.substring(0, resp.data.email.indexOf('@'))
    return (resp) ? next() : res.status(401).send("invalid token")
    } catch(error) {
      return res.status(401).send("invalid token")
    }
  }
}

export default Auth