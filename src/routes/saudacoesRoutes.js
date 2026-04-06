import { Router } from "express";
import { bomDia, boaTarde, boaNoite } from "../controllers/saudacaoController.js";


const router = Router();

router.get("/bom-dia/", bomDia);
router.get("/boa-tarde/", boaTarde);
router.get("/boa-noite/", boaNoite);


export default router;