const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/index.js");
const crypto = require("crypto");

class User extends Model {}

User.init(
  {
    type: {
      type: DataTypes.ENUM("superAdmin", "admin", "normal"),
      defaultValue: "normal",
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      get() {
        return () => this.getDataValue("password");
      },
    },
    salt: {
      type: DataTypes.STRING,
      get() {
        return () => this.getDataValue("salt");
      },
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

User.generateSalt = function () {
  return crypto.randomBytes(20).toString("hex");
};
User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

const setSaltAndPassword = (user) => {
  console.log("entre");
  if (user.changed("password")) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};
User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

User.prototype.validPassword = function (password) {
  return this.password() === User.encryptPassword(password, this.salt());
};

module.exports = User;
