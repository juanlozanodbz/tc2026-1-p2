const express = require("express")
const app = express()

app.get("/test", (req, res) => {
    res.send("Server test succesful")
})

app.listen(8083, () => {
    console.log("Server online on port 8083")
})