import express from "express"
import usuariosRoute from "./routes/usuariosRoute.js"
import infoRoute from "./routes/infoRoute.js"
import { logger } from "./middlewares/loggerMiddleware.js";


const app = express();

app.use(express.json());

// logs
app.use(logger);

// rotas
app.use(usuariosRoute);
app.use(infoRoute);


export default app;