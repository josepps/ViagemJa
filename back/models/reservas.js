const db = require("../database");
const { DataTypes } = require("sequelize");
const viagem = require("./viagem");

const reservas = db.define(
  "reservas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    passagens: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    viagem_id: {
      type: DataTypes.INTEGER,
      references: {
        model: viagem,
        key: "id",
      },
    }
  },
  {
    tableName: "reservas",
  }
);

module.exports = reservas;
