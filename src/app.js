import express from "express"
import router from "./routes/usuariosRoute.js"
import { logger } from "./middlewares/loggerMiddleware.js";


const app = express();

app.use(express.json());

// logs
app.use(logger);

// rotas
app.use(router);

export default app;