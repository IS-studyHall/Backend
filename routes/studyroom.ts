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
  const allStudyroom = (await Studyroom.find({owner: owner})).map(
    function(e, i){ 
      e.image='http://127.0.0.1:8080/' + e.image
      return e
    }
 )
  console.log('READ STUDYROOM', allStudyroom)
  res.status(200).send({data: allStudyroom})
})
router.get("/all", async (req: Request, res: Response) => {
  const allStudyroom = await Studyroom.find()
  console.log('READ STUDYROOM')
  res.status(200).send({data: allStudyroom})
})
router.post("/create", auth.organization, async (req: Request, res: Response) => {
  const {name, seats, floor, building, username, image} = req.body
  var imgName = `image/${uuidv4()}.png`;
  var base64Data = image.replace(/^data:image\/png;base64,/, "");
  var buf = Buffer.from(base64Data, 'base64');
  try {
    while(fs.existsSync(imgName))imgName = `image/${uuidv4()}.png`;
    fs.writeFile(imgName, buf,(err) => 
        console.log('download finito!', err)
    );
  } catch(err) {
      console.error(err)
  }
  await Studyroom.checkAndSave({ name, seats, floor, building, image: imgName, owner: username })
  console.log('CREATE STUDYROOM')
  res.status(200).send({data: 'create'})
})
router.get("/:id/changestatus", auth.organization, async (req: Request, res: Response) => {
  const {id} = req.params
  const {username} = req.body
  const owner = await User.findOne({username: username})
  console.log('OWNER', owner)
  const studyroom = await Studyroom.findOne({_id: id, owner: owner})
  console.log('STUDYROOM', studyroom)
  await studyroom.updateOne({isactive: !studyroom.isactive})
  console.log('UPDATE')
  res.status(200).send({data: 'change status'})
})
router.get("/:id", async (req: Request, res: Response) => {
  const {id} = req.params
  const studyroom = await Studyroom.findOne({_id: id})
  studyroom.image = 'http://127.0.0.1:8080/' + studyroom.image
  console.log('READ STUDYROOM')
  res.status(200).send({data: studyroom})
})
router.delete("/:id", auth.organization, async (req: Request, res: Response) => {
  const {id} = req.params
  const {username} = req.body
  const owner = await User.findOne({username: username})
  const studyroom = await Studyroom.findOne({_id: id, owner: owner})
  const image = studyroom.image
  try{
    fs.unlinkSync(image)
  }catch(e){
    console.log(e)
  }
  finally{
    await studyroom.deleteOne()
    res.status(200).send({data: 'delete'})
  }
})
export default router