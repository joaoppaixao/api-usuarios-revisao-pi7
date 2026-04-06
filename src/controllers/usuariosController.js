let usuarios = [];
let id = 1;


export const getUsuario = (req, res) => {
    return res.json(usuarios);
}

export const getUsuarioPorId = (req, res) => {
    const { id } = req.params;

    const usuario = usuarios.find(u => u.id == id);

    if (!usuario) {
        return res.status(404).json({
            erro: "[ERRO] Usuário não encontrado!"
        })
    }

    return res.json(usuario);
}

export const postUsuario = (req, res) => {
    const { nome, telefone } = req.body;

    const novoUsuario = {
        id: id++,
        nome,
        telefone
    }

    usuarios.push(novoUsuario);

    return res.status(201).json({
        mensagem: "Usuário criado com sucesso!", novoUsuario
    })
}

export const putUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, telefone } = req.body;

    const index = findIndex(u => u.id == id);

    if (index === -1) {
        return res.status(404).json({
            erro: "[ERRO] Usuário não encontrado!"
        });
    }

    usuarios[index] = {
        ...usuarios[index],
        nome,
        telefone
    }

    return res.status(200).json(usuarios[index]);
}

export const deleteUsuario = (req, res) => {
    const { id } = req.params;

    const index = usuarios.findIndex(u => u.id == id);

    if (index === -1) {
        return res.status(404).json({
            erro: "[ERRO] Usuário não encontrado!"
        });
    }

    usuarios.splice(index, 1);

    return res.status(204).send();
}