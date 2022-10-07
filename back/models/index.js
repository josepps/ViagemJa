const viagem = require("./viagem");
const reservas = require("./reservas");

reservas.belongsTo(viagem, {
  foreignKey: "viagem_id",
});

viagem.hasMany(reservas, {
  foreignKey: "viagem_id",
})

module.exports = {
  viagem,
  reservas
};