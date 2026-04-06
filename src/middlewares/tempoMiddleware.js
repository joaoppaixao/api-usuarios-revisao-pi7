export const tempo = (req, res, next) => {
    const inicio = Date.now();

    res.on("finish", () => {
        const duracao = Date.now() - inicio;
        console.log(`Tempo da requisição: ${duracao}ms`);
    });

    next();
}