const express = require("express")
const upload = express.Router()

const path = require("path")
const multer = require("multer")

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../../img")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname + `-` + Date.now() + path.extname(file.originalname))
    }
})

const load = multer({storage})

upload.get("/",(req,res)=>{
    res.send("hola mundo")
    console.log("hola")
})

upload.use(express.json())
upload.use(express.urlencoded({extended: true}))

upload.post("/upload",load.single("file"), (req,res)=>{
    console.log("Storage location is"+req.hostname+"/"+req.file.path )
    return res.send(req.file)
})





module.exports = upload