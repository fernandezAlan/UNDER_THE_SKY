const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class ProductData extends Model {}
ProductData.init(
  {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailClient: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    digital: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    styleInfo: {
      type: DataTypes.STRING,
      defaultValue: "nada aun",
    },
    size: {
      type: DataTypes.STRING,
    },
    frame: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.INTEGER,
    },
    bought: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "product_data" }
);

module.exports = ProductData;
