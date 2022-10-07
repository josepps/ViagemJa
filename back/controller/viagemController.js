const { viagem } = require("../models")

const viagemController = {
    listarViagem: async (req, res) => {

        const listaDeViagens = await viagem.findAll();

        res.json(listaDeViagens);
    },

    async listarViagemId(req, res) {
        const { id } = req.params;

        const listaDeViagensId = await viagem.findByPk(id);

        res.json(listaDeViagensId);
    },

    async criarViagem(req, res) {
        const {data, local, atracoes, descricao, numerodevagas} = req.body;

        const novaViagem = await viagem.create({
            data, local, atracoes, descricao, numerodevagas
        });

        res.json(novaViagem);
    },

    async deletarViagem(req, res) {
        const { id } = req.params;

        await viagem.destroy({
            where:{
                id,
            },
        });
        
        res.json("Viagem deletada")
    },

    async atualizarViagem(req, res) {
        const { id } = req.params;
        const {data, local, atracoes, descricao, numerodevagas} = req.body;

        const viagemAtualizada = await viagem.update({
            data,
            local,
            atracoes,
            descricao, 
            numerodevagas,
        },
        {
            where: {
                id,
            },
        }
    );

    res.json("Viagem Atualizada")

    },
};

module.exports = viagemController;