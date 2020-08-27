const express= require("express")
const articulos = require("./routes/articulos")
const upload = require("./routes/upload")


const app = express()
/* app.use(bodyParser.json()) */


app.use("/api/upload", upload)
app.use("/api/articulos", articulos)


module.exports = app