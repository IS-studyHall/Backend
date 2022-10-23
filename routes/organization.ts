import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import organization from "../models/organization";
import Firebase from "../sdk/Firebase";

const router = Router()

router.post("/login", async (req: Request, res: Response) => {
    const { email, password } = req.body
    const { data } = await Firebase.login(email, password)
    if(data){
      organization.checkAndSave(data)
      res.status(200).send({data: data})
    }
    else res.status(401).send({message: 'invalid credentials'})
  })

  router.get("/info", Auth.organization, async (req: Request, res: Response) => {
    const body = req.body
    res.send({message: 'check'})
  })

  export default router