const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');
const moment =require("moment")

class Order extends Sequelize.Model { }
Order.init(
    {
        status: {
            type: Sequelize.ENUM('cart', 'delivered', 'inprocess', 'printing'),
            defaultValue: 'inprocess'
        },
        deliveryPoint: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        address: {
            type: Sequelize.STRING,

        },
        city: {
            type: Sequelize.STRING,

        },
        country: {
            type: Sequelize.STRING,

        },
        state: {
            type: Sequelize.STRING,

        },
        postCode: {
            type: Sequelize.STRING,

        },
        totalPrice:{
            type:Sequelize.INTEGER
        },
        productsQuantity:{
            type: Sequelize.INTEGER
        },
        transactionNumber: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }


    }, { sequelize, modelName: 'order' });

module.exports = Order;



  