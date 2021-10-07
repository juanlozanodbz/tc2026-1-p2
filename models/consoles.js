const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const Console = (sequelize)=>{
    sequelize.define('console'),{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        brand:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        name:{
            type:Sequelize.STRING(30),
            allowNull:false
        }
    }
}

module.exports = Console