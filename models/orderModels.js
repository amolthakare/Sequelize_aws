const {sequelize} =require("../config/config");

const DataTypes = require("sequelize");
const Orders = sequelize.define("orders",{
    id:{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    quatity:{
        type:DataTypes.INTEGER,
    },
    price:{
        type:DataTypes.STRING,
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:"CONFIRMED"
    },

});

module.exports={Orders};