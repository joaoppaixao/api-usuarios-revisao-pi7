import { Router } from "express"
import { getInfo } from "../controllers/infoController.js"


const router = Router();

router.get("/info/", getInfo);


export default router;