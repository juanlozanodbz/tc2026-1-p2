function applyRelationships(sequelize) {
    //Print models adhered to connection object
    console.log(sequelize.models)
    const Videojuego = sequelize.models.videojuego
    const Console = sequelize.models.console
    const ConsoleVideogame = sequelize.models.consoleVideogame

    //Videogame can be played in >=1 consoles
    Videojuego.belongsToMany(Console, {through:ConsoleVideogame})
    //One console has >=1 videogames
    Console.belongsToMany(Videojuego, {through:ConsoleVideogame})
    //Generates foraneous key inside intermediate table

    //If you had a one to many relationship
    /*Videogame can have several trophies, 
    but a trophy only to one game*/

    //Videogame.hasMany(Trophy) //One to many
    //Trophy.belongsToMany(Videojuego) //Many to one

}

module.exports = {applyRelationships}