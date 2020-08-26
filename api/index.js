const express= require("express")

const articulos = require("./routes/articulos")

const app = express()
/* app.use(bodyParser.json()) */
const path = require("path")
const multer = require("multer")

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./img")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + `-` + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

app.get("/",(req,res)=>{
    res.send("hola mundo")
    console.log("hola")
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api/upload",upload.single("file"), (req,res)=>{
    console.log("Storage location is"+req.hostname+"/"+req.file.path )
    return res.send(req.file)
})




app.use("/api/articulos", articulos)



module.exports = app