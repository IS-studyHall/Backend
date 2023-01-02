import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import Esse3 from "../sdk/Esse3";
import User from "../models/user"
const router = Router()

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body
  const { data } = await Esse3.login(username, password)
  if(data){
    User.checkAndSaveStudent(data)
    console.log('LOGIN STUDENT', data)
    res.status(200).send({data: data})
  }
  else
    res.status(401).send({message: 'invalid credentials'})
})

router.get("/", Auth.student, async (req: Request, res: Response) => {
  const body = req.body
  res.send({message: 'check'})
})

export default router