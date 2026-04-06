let contador = 0;

export const contadorReq = (req, res, next) => {
    contador++;

    console.log(`Requisição número: ${contador}`);

    next();
}