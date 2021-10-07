const Sequelize = require("sequelize")
const sequelize = require("../utils/database")
const ConsoleVideogame = (sequelize)=>{
    sequelize.define('consoleVideogame',{
        idCV:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        launch: Sequelize.STRING
    })
}

module.exports = ConsoleVideogame