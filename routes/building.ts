import { Router, Request, Response } from "express";
import Building from "../models/building";

const router = Router()

router.get("/info", async (req: Request, res: Response) => {
    const allBuildings = await Building.find()
    res.send({buildings: allBuildings})
  })

  export default router