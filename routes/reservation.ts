import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import Reservation from "../models/reservation";
import User from "../models/user";
import { timeRange } from "../config/data";
const router = Router()

router.post("/create", Auth.student, async (req: Request, res: Response) => {
  const {start, end, date, username} = req.body
  const user = await User.findOne({username: username})
  const myTime = timeRange.find(t => t.start === start && t.end === end)
  if(myTime) await Reservation.create({start: myTime.start, end: myTime.end, date: date, user: user})
  res.send({data: 'create'})
})

  export default router