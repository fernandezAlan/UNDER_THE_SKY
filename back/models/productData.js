const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');

class ProductData extends Sequelize.Model { }
ProductData.init({
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, { sequelize, modelName: 'productData' });

module.exports = ProductData;