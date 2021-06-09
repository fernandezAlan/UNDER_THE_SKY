const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class Display extends Model {}
Display.init(
  {
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "display" }
);

module.exports = Display;
