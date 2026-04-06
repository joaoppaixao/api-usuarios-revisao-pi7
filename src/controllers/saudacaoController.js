export const bomDia = (req, res) => {
    res.json({
        mensagem: "Bom dia!"
    });
}

export const boaTarde = (req, res) => {
    res.json({
        mensagem: "Boa tarde!"
    });
}

export const boaNoite = (req, res) => {
    res.json({
        mensagem: "Boa noite!"
    });
}