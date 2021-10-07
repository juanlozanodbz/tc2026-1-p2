const express = require("express")
const path = require("path")

const app = express()

const vjRoutes = require('./routes/videojuegos')
const sequelize = require('./utils/database')

//Configurar el servidor y que sepa que es un json
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/videojuegos",vjRoutes);


app.get("/test", (req, res) => {
    res.send("Server Test Succesful")
})

app.listen(8083, () => {
    console.log("Server online on port 8083")
})