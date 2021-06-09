const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class Order extends Model {}
Order.init(
  {
    status: {
      type: DataTypes.ENUM("cart", "delivered", "inprocess", "printing"),
      defaultValue: "inprocess",
    },
    deliveryPoint: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    postCode: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
    productsQuantity: {
      type: DataTypes.INTEGER,
    },
    transactionNumber: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: "order" }
);

module.exports = Order;
