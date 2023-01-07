import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import Reservation from "../models/reservation";
import User from "../models/user";
import { timeRange } from "../config/data";
import Studyroom from "../models/studyroom";
const router = Router()
//create reservation
router.post("/create", Auth.student, async (req: Request, res: Response) => {
  const {start, end, date, id, username} = req.body
  const studyroom = await Studyroom.findById(id)
  const user = await User.findOne({username: username})
  const myTime = timeRange.find(t => t.start === start && t.end === end)
  if(myTime) await Reservation.create({start: myTime.start, end: myTime.end, date: date, user: user, studyroom: studyroom})
  res.send({data: 'create'})
})
//get all reservations by user
router.get("/", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const user = await User.findOne({username: username})
  const reservations = await Reservation.find({user: user})
  res.send({data: reservations})
})
//get all reservations by user
router.get("/active", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const today = new Date()
  const user = await User.findOne({username: username})
  const reservations = (await Reservation.find({user: user})).filter(
    (o) => o.date > today.toISOString(),
  );
  res.send({data: reservations})
})
//get all reservations by user
router.get("/expired", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const today = new Date()
  const user = await User.findOne({username: username})
  const reservations = (await Reservation.find({user: user})).filter(
    (o) => o.date <= today.toISOString(),
  );
  res.send({data: reservations})
})
//delete reservation by user
router.delete("/:id", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const {id} = req.params
  const user = await User.findOne({username: username})
  const reservations = await Reservation.findOneAndDelete({_id: id, user: user})
  res.send({data: reservations})
})
//get all reservations by organizer
router.get("/supervisor", Auth.organization, async (req: Request, res: Response) => {
  const {username} = req.body
  const user = await User.findOne({username: username})
  const reservations = await Reservation.find({user: user})
  res.send({data: reservations})
})
  export default router