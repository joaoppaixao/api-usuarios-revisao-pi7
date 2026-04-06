export const verificarToken = (req, res, next) => {
    const { token } = req.headers;

    if (token != '123') {
        return res.status(401).json({
            erro: '[ERRO] Token inválido!'
        });
    }

    next();
}