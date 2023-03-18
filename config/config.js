const {Sequelize } = require("sequelize");

const sequelize = new Sequelize('evaluation','root','Amol@123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports={sequelize};