import { Router, Request, Response } from "express";
import Auth from "../middleware/auth";
import Favorite from "../models/favorite";
import Studyroom from "../models/studyroom";
import User from "../models/user";

const router = Router()

router.get("/", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const user = await User.findOne({username: username})
  const allFavorites = await Favorite.find({user: user})
  res.send({data: allFavorites})
})
router.get("/:id/create", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const {id} = req.params
  const user = await User.findOne({username: username})
  const studyroom = await Studyroom.findById(id)
  const favorite = new Favorite({user: user, studyroom: studyroom})
  favorite.save()
  res.send({data: 'create'})
})

router.delete("/:id", Auth.student, async (req: Request, res: Response) => {
  const {username} = req.body
  const {id} = req.params
  const user = await User.findOne({username: username})
  const studyroom = await Studyroom.findById(id)
  await Favorite.findOneAndDelete({user: user, studyroom: studyroom})
  res.send({data: 'delete'})
})

  export default router