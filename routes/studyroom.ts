import { Router, Request, Response } from "express";
import Studyroom from "../models/studyroom";
import User from "../models/user";
import auth from '../middleware/auth';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
const router = Router()

router.get("/supervisor", auth.organization, async (req: Request, res: Response) => {
  const {username} = req.body
  const owner = await User.findOne({username: username, supervisor: true})
  const allStudyroom = await Studyroom.find({owner: owner})
  console.log('READ STUDYROOM')
  res.status(200).send({data: allStudyroom})
})

router.post("/create", auth.organization, async (req: Request, res: Response) => {
  const {name, seats, floor, building, username, image} = req.body
  const imgName = `image/${uuidv4()}.png`;
  var base64Data = image.replace(/^data:image\/png;base64,/, "");
  fs.writeFile(imgName, base64Data, 'base64', function(err) {
    console.log(err);
  });
  const studyroom = await Studyroom.checkAndSave({ name, seats, floor, building, image: imgName, owner: username })
  console.log('CREATE STUDYROOM')
  res.status(200).send({data: 'create'})
})
  export default router