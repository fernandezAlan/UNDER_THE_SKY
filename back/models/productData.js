const Sequelize = require('sequelize')
const sequelize = require('../db/index.js');
const Style = require('./style')

class ProductData extends Sequelize.Model { }
ProductData.init({
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    content: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    language: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailClient: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    quantity:{
        type: Sequelize.INTEGER,
        defaultValue:1
    },
    digital:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },   
    styleInfo:{
        type:Sequelize.STRING,
        defaultValue:'nada aun'

    },
    size:{
        type:Sequelize.STRING
    },
    frame:{
        type:Sequelize.STRING
    },
   
    price:{
        type:Sequelize.INTEGER
    },
    bought:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }


}, { sequelize, modelName: 'product_data' });

module.exports = ProductData;