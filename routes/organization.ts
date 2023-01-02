import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import User from "../models/user";
import Firebase from "../sdk/Firebase";

const router = Router()

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body
  const { data } = await Firebase.login(email, password)
  if(data){
    User.checkAndSaveOrganization(data)
    console.log('LOGIN ORGANIZATION', data)
    res.status(200).send({data: data})
  }
  else res.status(401).send({message: 'invalid credentials'})
})

router.get("/", Auth.organization, async (req: Request, res: Response) => {
  const body = req.body
  res.send({message: 'check'})
})

export default router