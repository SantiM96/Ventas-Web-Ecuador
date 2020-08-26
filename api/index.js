const express= require("express")
const multer = require("multer")
const articulos = require("./routes/articulos")

const app = express()
/* app.use(bodyParser.json()) */
const path = require("path")

app.use(multer({
    dest: path.join(__dirname, "../img")
}).single("file"))



app.post("/api/upload", (req,res)=>{
    console.log(req.file)
    return res.send(req.file)
})




app.use("/api/articulos", articulos)



module.exports = app