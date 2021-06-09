const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class Product extends Model {}
Product.init(
  {
    digital: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, modelName: "product" }
);

module.exports = Product;
