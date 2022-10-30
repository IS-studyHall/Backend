import { Router, Request, Response } from "express";
import Building from "../models/building";

const router = Router()

router.get("/", async (req: Request, res: Response) => {
  const allBuildings = await Building.find()
  res.send({data: allBuildings})
})

  export default router