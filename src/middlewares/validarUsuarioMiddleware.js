export const validarUsuario = (req, res, next) => {
    const { nome, telefone } = req.body;

    if (!nome) {
        return res.status(400).json({
            error: '[ERRO] O nome do cliente é obrigatório!'
        });
    }

    if (!telefone) {
        return res.status(400).json({
            erro: '[ERRO] O nome do cliente é obrigatório!'
        });
    }

    next();
}