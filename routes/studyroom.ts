import { Router, Request, Response } from "express";
import Studyroom from "../models/studyroom";
import auth from '../middleware/auth';

const router = Router()

router.get("/", async (req: Request, res: Response) => {
  console.log('kjde')
  //const allStudyroom = await Studyroom.find()
  console.log('allStudyroom')
  res.send({data: {}})
})

router.post("/create", auth.organization, async (req: Request, res: Response) => {
  const {name, seats, floor, building} = req.body
  console.log(name)
  //const studyroom = new Studyroom({name, seats, floor, building})
  //studyroom.save()
  res.send({data: 'check'})
})
  export default router