import { Router, Request, Response } from "express";
import User from "../models/user"
import auth from "../middleware/auth"
const router = Router()

router.get("/", auth.organization, async (req: Request, res: Response) => {
  const { username } = req.body
  const user = await User.findOne({username: username})
  res.status(200).send({data: user})
})

export default router