import express from "express";
import usuariosRoute from "./routes/usuariosRoute.js";
import infoRoute from "./routes/infoRoute.js";
import segurancaRoute from "./routes/segurancaRoute.js";
import { logger } from "./middlewares/loggerMiddleware.js";
import { contadorReq } from "./middlewares/contadorMiddleware.js";


const app = express();

app.use(express.json());

// logs
app.use(logger);
app.use(contadorReq);

// rotas
app.use(usuariosRoute);
app.use(infoRoute);
app.use(segurancaRoute);


export default app;