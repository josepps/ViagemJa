const db = require("../database");
const { DataTypes } = require("sequelize");

const viagem = db.define(
  "viagem",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
        type: DataTypes.DATE
    },
    local: {
        type: DataTypes.STRING
    },
    atracoes: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    numerodevagas: {
        type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "viagem",
  }
);

module.exports = viagem;
