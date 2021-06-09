const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class Size extends Model {}
Size.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.ENUM({
        values: ["digital", "impreso"],
      }),
      allowNull: false,
    },
  },
  { sequelize, modelName: "size" }
);

module.exports = Size;
