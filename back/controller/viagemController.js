const { viagem } = require("../models")

const viagemController = {
    listarViagem: async (req, res) => {
        try {
        const listaDeViagens = await viagem.findAll();

        res.status(200).json(listaDeViagens);
        } catch (error) {
            return res.status(500).json("ocorreu algum problema")
        }
    },

    async listarViagemId(req, res) {
        try {
        const { id } = req.params;

        const listaDeViagensId = await viagem.findByPk(id);

        res.status(200).json(listaDeViagensId);
        } catch (error) {
            return res.status(500).json("ocorreu algum problema")
        }
    },

    async criarViagem(req, res) {
        try {
        const {data, local, atracoes, descricao, numerodevagas} = req.body;

        const novaViagem = await viagem.create({
            data, local, atracoes, descricao, numerodevagas
        });

        res.status(201).json(novaViagem);
    } catch (error) {
        return res.status(500).json("ocorreu algum problema")
    }
    },

    async deletarViagem(req, res) {
        try{ 
            const { id } = req.params;
    
            await viagem.destroy({
                where:{
                    id,
                },
            });
            
            return res.sendStatus(204);
            } catch(error) {
                return res.status(500).json("ocorreu algum problema")
            }
    },

    async atualizarViagem(req, res) {
        try {
        const { id } = req.params;
        const {data, local, atracoes, descricao, numerodevagas} = req.body;

        if(!id) return res.status(400).json("Id não enviado");

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

    return res.status(200).json("viagem Atualizada");
} catch (error) {
    return res.status(500).json("ocorreu algum problema")
}
},
};

module.exports = viagemController;