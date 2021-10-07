const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const Console = (sequelize)=>{
    sequelize.define('console'),{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name:Sequelize.STRING
    }
}

module.exports = Console