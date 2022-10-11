const { reservas, viagem }  = require("../models")

const reservasController = {
    listarReserva: async (req, res) => {
        try {
        const listaDeReservas = await reservas.findAll({
            include: viagem
        });

        res.status(200).json(listaDeReservas);
    } catch (error) {
        return res.status(500).json("ocorreu algum problema")
     }
    },

    async criarReserva(req, res) {
        try {
        const {nome, email, passagens, viagem_id} = req.body;

        const novaReserva = await reservas.create({
            nome, 
            email, 
            passagens, 
            viagem_id
        });

        res.status(201).json(novaReserva);
    } catch (error) {
        return res.status(500).json("ocorreu algum problema")
    }
    },

    async listarReservaId(req, res) {
        try {
        const { id } = req.params;

        const listaDereservasId = await reservas.findByPk(id, {
            include: viagem
        });

        res.status(200).json(listaDereservasId);
    } catch (error) {
        return res.status(500).json("ocorreu algum problema")
    }
    },

    async listarReservaIdViagem(req, res) {
        try {
        const { id } = req.params;

        const listaDereservasIdViagem = await viagem.findByPk(id, {
            include: reservas
        });

        res.status(200).json(listaDereservasIdViagem);
    } catch (error) {
        return res.status(500).json("ocorreu algum problema")
    }
    },

    async deletarReserva(req, res) {
        try{ 
        const { id } = req.params;

        await reservas.destroy({
            where:{
                id,
            },
        });
        
        res.sendStatus(204);
        } catch(error) {
            return res.status(500).json("ocorreu algum problema")
        }
    },

};

module.exports = reservasController;