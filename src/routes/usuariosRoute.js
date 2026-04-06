import { Router } from "express";
import { getUsuario, getUsuarioPorId, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuariosController.js";
import { validarUsuario } from "../middlewares/validarUsuarioMiddleware.js";


const router = Router();

router.get("/usuarios/", getUsuario);

router.get("/usuarios/:id/", getUsuarioPorId);

router.post("/usuarios/", validarUsuario, postUsuario);

router.put("/usuarios/:id/", validarUsuario, putUsuario);

router.delete("/usuarios/:id/", deleteUsuario);


export default router;