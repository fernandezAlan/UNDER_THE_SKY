const Sequelize = require("sequelize");
const sequelize = require("../db/index.js");
const crypto = require("crypto");

class User extends Sequelize.Model {}

User.init(
  {
    type: {
      type: Sequelize.ENUM("superAdmin", "admin", "normal"),
      defaultValue: "normal"
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      get() {
        return () => this.getDataValue('password')
    }
    },
    salt: {
      type: Sequelize.STRING,
      get() {
        return() => this.getDataValue('salt')
      }
    }
  },
  {
    sequelize,
    modelName: "user"
  }
);


User.generateSalt = function() {
  return crypto.randomBytes(20).toString('hex')
}
User.encryptPassword = function(plainText, salt) {
  return crypto
      .createHash('RSA-SHA256')
      .update(plainText)
      .update(salt)
      .digest('hex')
}

const setSaltAndPassword = user => {
  console.log("entre")
  if (user.changed('password')) {
      user.salt = User.generateSalt()
      user.password = User.encryptPassword(user.password(), user.salt())
  }
}
User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

/*
User.addHook("beforeCreate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});


User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
*/


User.prototype.validPassword = function(password) {
  return this.password() === User.encryptPassword(password, this.salt());
};

 

module.exports = User;
