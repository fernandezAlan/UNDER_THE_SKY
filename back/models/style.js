const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class Style extends Model {}
Style.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipografia: {
      type: DataTypes.STRING,
      defaultValue: "n/a",
    },
    signo: {
      type: DataTypes.ENUM({
        values: [
          "n/a",
          "aries",
          "tauro",
          "geminis",
          "cancer",
          "leo",
          "virgo",
          "libra",
          "escorpio",
          "sagitario",
          "capricornio",
          "acuario",
          "piscis",
        ],
      }),
      defaultValue: "n/a",
    },
    imgType: {
      type: DataTypes.STRING,
    },
    imgName: {
      type: DataTypes.STRING,
    },
    imgData: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    imgPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "style" }
);

module.exports = Style;
