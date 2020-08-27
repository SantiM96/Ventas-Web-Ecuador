const express= require("express")
const articulos = require("./routes/articulos")
const upload = require("./routes/upload")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true  })

const app = express()

app.use(bodyParser.json())


app.use("/api/upload", upload)
app.use("/api/articulos", articulos)


module.exports = app