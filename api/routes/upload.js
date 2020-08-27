const {Router} = require("express")
const multer = require("multer")
const path = require("path")
const upload = Router()

const storage =  multer.diskStorage({
    destination:path.join(__dirname, "../../img"),
    filename: (rq,file,cb)=>{
        cb(null,file.originalname)
    }
})

const load = multer({
    storage,
    dest: path.join(__dirname, "../../img")
}).single("file")

upload.post("/",load, (req,res)=>{
    console.log(req.file)
    return res.send(req.file)
})


module.exports = upload