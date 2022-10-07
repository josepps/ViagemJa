// #listar reserva por id

const { reservas, viagem }  = require("../models")

const reservasController = {
    listarReserva: async (req, res) => {

        const listaDeReservas = await reservas.findAll({
            include: viagem
        });

        res.json(listaDeReservas);
    },

    async criarReserva(req, res) {
        const {nome, email, passagens, viagem_id} = req.body;

        const novaReserva = await reservas.create({
            nome, email, passagens, viagem_id
        });

        res.json(novaReserva);
    },

    async listarReservaId(req, res) {
        const { id } = req.params;

        const listaDereservasId = await reservas.findByPk(id, {
            include: viagem
        });

        res.json(listaDereservasId);
    },

//fazendo (só aqui)

    async listarReservaIdViagem(req, res) {
        const { id } = req.params;

        const listaDereservasIdViagem = await viagem.findByPk(id, {
            include: reservas
        });

        res.json(listaDereservasIdViagem);
    },

    async deletarReserva(req, res) {
        const { id } = req.params;

        await reservas.destroy({
            where:{
                id,
            },
        });
        
        res.json("Reserva deletada")
    },

};

module.exports = reservasController;