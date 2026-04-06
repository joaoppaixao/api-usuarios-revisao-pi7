import { Router } from "express";
import { tempo } from "../middlewares/tempoMiddleware.js";


const router = Router();

router.get("/teste/", tempo, (req, res) => {
    res.json({
        mensagem: "Rota de teste funcionando!"
    });
})


export default router;