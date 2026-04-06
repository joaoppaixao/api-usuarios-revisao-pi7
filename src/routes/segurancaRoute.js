import { Router } from "express"
import { verificarToken } from "../middlewares/verificarTokenMiddleware.js"


const router = Router();

router.get("/seguranca/", verificarToken, (req, res) => {
    return res.json({
        mensagem: "Acesso permitido!"
    });
});


export default router;