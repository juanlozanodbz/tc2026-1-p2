const express = require("express")
const app = express()

app.get("/test", (req, res) => {
    res.send("Holi Karem")
})

app.listen(8083, () => {
    console.log("Server online on port 8083")
})