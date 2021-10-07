const Sequelize = require("sequelize")
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