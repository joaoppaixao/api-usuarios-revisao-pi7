export const getInfo = (req, res) => {
    return res.json({
        aplicacao: "API Express",
        versao: "1.0"
    });
}