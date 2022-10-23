import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import Esse3 from "../sdk/Esse3";
import Student from "../models/student"
const router = Router()

router.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body
      const { data } = await Esse3.login(username, password)
      if(data){
        Student.checkAndSave(data)
        res.send({
          data: data
        })
      }
      else
        res.status(401).send({message: 'invalid credentials'})
  })

  router.get("/info", Auth.student, async (req: Request, res: Response) => {
    const body = req.body
    res.send({message: 'check'})
  })

  export default router