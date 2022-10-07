const express = require("express");
const reservasController = require("../controller/reservasController");
const viagemController = require("../controller/viagemController");
const routes = express.Router();

routes.get("/viagem/listar", viagemController.listarViagem);
routes.get("/viagem/:id/listar", viagemController.listarViagemId);
routes.post("/viagem/criar", viagemController.criarViagem);
routes.delete("/viagem/:id/deletar", viagemController.deletarViagem);
routes.put("/viagem/:id/atualizar", viagemController.atualizarViagem);

routes.get("/reserva/listar", reservasController.listarReserva);
routes.get("/reserva/:id/listar", reservasController.listarReservaId);
routes.get("/reservaViagem/:id/listar", reservasController.listarReservaIdViagem);
routes.post("/reserva/criar", reservasController.criarReserva);
routes.delete("/reserva/:id/deletar", reservasController.deletarReserva);

module.exports = routes;