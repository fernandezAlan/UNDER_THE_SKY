const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");

class Frame extends Model {}
Frame.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
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
  { sequelize, modelName: "frame" }
);

module.exports = Frame;
