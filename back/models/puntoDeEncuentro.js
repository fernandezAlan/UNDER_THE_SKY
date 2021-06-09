const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class PuntoDeEncuentro extends Model {}
PuntoDeEncuentro.init(
  {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Attention: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "puntoDeEncuentro" }
);

module.exports = PuntoDeEncuentro;
