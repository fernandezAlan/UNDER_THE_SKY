const Sequelize = require("sequelize");
const sequelize = require("../db/index.js");

class Style extends Sequelize.Model {}
Style.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipografia: {
      type: Sequelize.STRING,
      defaultValue:'n/a'
    },
    signo: {
      type: Sequelize.ENUM({
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
      defaultValue:'n/a'
    },
    imgType: {
      type: Sequelize.STRING,
    },
    imgName: {
      type: Sequelize.STRING,
    },
    imgData: {
      type: Sequelize.BLOB("long"),
      allowNull: false,
    },
    imgPath: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "style" }
);

module.exports = Style;
