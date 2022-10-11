const express = require("express");
const reservasController = require("../controller/reservasController");
const viagemController = require("../controller/viagemController");
const routes = express.Router();

routes.get("/viagens", viagemController.listarViagem);
routes.get("/viagens/:id", viagemController.listarViagemId);
routes.post("/viagens", viagemController.criarViagem);
routes.delete("/viagens/:id", viagemController.deletarViagem);
routes.put("/viagens/:id", viagemController.atualizarViagem);

routes.get("/reservas", reservasController.listarReserva);
routes.get("/reservas/:id", reservasController.listarReservaId);
routes.get("/reservasViagem/:id", reservasController.listarReservaIdViagem);
routes.post("/reservas", reservasController.criarReserva);
routes.delete("/reservas/:id", reservasController.deletarReserva);

module.exports = routes;