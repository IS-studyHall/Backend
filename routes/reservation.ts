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
  const today = new Date(); 
  let datea = new Date(date); 
  
  if(datea <= today){
    res.status(400).send({error: 'errore data errata'})
  }
  const studyroom = await Studyroom.findById(id)
  if(studyroom.isactive === false) res.status(400).send({error: 'aula studio non attiva'})
  const user = await User.findOne({username: username})
  const myTime = timeRange.find(t => t.start === start && t.end === end)
  if(myTime){
    const reservations = await Reservation.find({start: myTime.start, end: myTime.end, date: date, studyroom: studyroom})
    if(reservations.length < studyroom.seats)
    {
      try {
        await Reservation.create({start: myTime.start, end: myTime.end, date: date, user: user, studyroom: studyroom})
      }catch(e) {
        res.status(400).send({error: 'errore durante la creazione della prenotazione'})
      }
    }else{
      res.status(400).send({error: 'posti disponibili esauriti'})
    }
  }
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
//get count reservations by date and studyroom id
router.post("/", Auth.student, async (req: Request, res: Response) => {
  const {id, date} = req.body
  const studyroom = await Studyroom.findById(id)
  const reservations = await Reservation.aggregate(
    [
      { "$match": {"date": date, "studyroom": studyroom._id } },
      {
        $group : {
          _id : {
            "start": "$start",
            "end": "$end",
          },
          count: { $sum: 1 },
        },
      },
     ]
  )
  res.send({data: reservations})
})
//get all reservations by studyroom
router.get("/:id", Auth.organization, async (req: Request, res: Response) => {
  const {username} = req.body
  const {id} = req.params
  const user = await User.findOne({username: username})
  const studyroom = await Studyroom.findOne({_id: id, owner: user})
  const today = new Date()
  const reservations = (await Reservation.find({studyroom: studyroom})) //.map(r => r.date > today.toISOString())
  res.send({data: reservations})
})
  export default router